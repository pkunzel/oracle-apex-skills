# APEX_AI

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html)

Status: curated first-pass reference. This page is written for LLM skills and GPT retrieval, with short original examples and links back to the exact Oracle member pages.

## Purpose

`APEX_AI` is the PL/SQL package for calling Oracle APEX Generative AI features from server-side code. It supports:

- Single prompt-response calls with `GENERATE`.
- Multi-turn conversations with `CHAT`.
- Shared Component AI Agents through `p_agent_static_id`.
- Direct Generative AI Service calls through `p_service_static_id`.
- Attachments for file-aware prompts.
- JSON Schema controlled responses.
- Ad-hoc AI tools declared directly in PL/SQL.
- Response handlers for tool-call orchestration, logging, guardrails, and early exit.
- Vector embeddings.
- Token availability and user consent APIs.

Most calls require a valid APEX runtime session. If a script runs outside a page request, create a session first with `APEX_SESSION.CREATE_SESSION`.

## Choosing The Entry Point

Use `GENERATE` when one prompt should produce one final answer.

Use `CHAT` when the app needs conversation memory. The `p_messages` collection is passed by reference and APEX appends the conversation turns.

Use the agent signatures when the AI Agent is configured under Shared Components. Use the service signatures when code needs to compose prompts, tools, attachments, schemas, or handlers at runtime.

## Core Data Types

### Attachments

`t_attachment` describes one uploaded or generated file:

```sql
apex_ai.t_attachment(
    mime_type    => 'application/pdf',
    content_blob => l_blob,
    content_clob => null,
    file_name    => 'invoice.pdf',
    detail_level => apex_ai.c_detail_level_auto )
```

Use `content_blob` for binary files such as images, PDFs, audio, and office files. Use `content_clob` for text-based file content. Provider and model support determines which file types and sizes work.

`t_attachments` is a collection of `t_attachment`.

### Chat Messages

`t_chat_messages` stores chat history. Initialize it with:

```sql
l_messages apex_ai.t_chat_messages := apex_ai.c_chat_messages;
```

Useful role constants:

- `c_role_system`
- `c_role_user`
- `c_role_assistant`
- `c_role_tool`

### Tools

`t_tool` defines a function-calling tool available to the AI model:

```sql
apex_ai.t_tool(
    name               => 'get_order_status',
    description        => 'Look up the current status for an order.',
    parameters         => apex_ai.t_tool_parameters(...),
    callback_procedure => 'get_order_status_tool' )
```

Tool callbacks must use this signature:

```sql
create or replace procedure my_tool (
    p_param  in            apex_ai.t_tool_exec_param,
    p_result in out nocopy apex_ai.t_tool_exec_result )
as
begin
    p_result.result := 'tool result';
end;
/
```

Read model-supplied arguments from `p_param.args_json`.

Supported tool parameter data-type constants:

- `c_tool_param_type_varchar2`
- `c_tool_param_type_number`
- `c_tool_param_type_boolean`
- `c_tool_param_type_clob`

## Public Members

| Member | Use |
| --- | --- |
| [CHAT Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-1.html) | Chat through a Shared Component AI Agent. |
| [CHAT Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-2.html) | Chat through a Generative AI Service, with optional tools and response handler. |
| [CHAT Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-3.html) | Deprecated `p_config_static_id` form. Prefer signature 1. |
| [GENERATE Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-1.html) | Generate through a Shared Component AI Agent. |
| [GENERATE Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-2.html) | Generate through a Generative AI Service, with optional schema, tools, attachments, and handler. |
| [GENERATE Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-3.html) | Deprecated `p_config_static_id` form. Prefer signature 1. |
| [GET_AVAILABLE_TOKENS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_AVAILABLE_TOKENS-Function.html) | Return remaining configured token capacity. |
| [GET_VECTOR_EMBEDDINGS Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-1.html) | Get embeddings from a Vector Provider static ID. |
| [GET_VECTOR_EMBEDDINGS Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-2.html) | Get embeddings from a local ONNX model owner/name. |
| [GET_VECTOR_EMBEDDINGS Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-3.html) | Get embeddings from a custom PL/SQL embedding function. |
| [IS_ENABLED](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.IS_ENABLED-Function.html) | Check whether Generative AI is enabled for the workspace. |
| [IS_USER_CONSENT_NEEDED](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.IS_USER_CONSENT_NEEDED-Function.html) | Check whether the user still needs to consent before AI use. |
| [REVOKE_USER_CONSENT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.REVOKE_USER_CONSENT-Procedure.html) | Remove AI consent for one user/application. |
| [REVOKE_USER_CONSENT_FOR_ALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.REVOKE_USER_CONSENT_FOR_ALL-Procedure.html) | Remove AI consent for all users in an application. |
| [SET_TOOL_RESULT Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_TOOL_RESULT-Procedure-Signature-1.html) | Override result/notification from declarative Generative AI Tools. |
| [SET_TOOL_RESULT Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_TOOL_RESULT-Procedure-Signature-2.html) | Set a result for a pending tool call inside a response handler. |
| [SET_USER_CONSENT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_USER_CONSENT-Procedure.html) | Mark a user as having consented to AI use. |

## `CHAT`

### Signature 1: AI Agent Chat

```sql
apex_ai.chat(
    p_agent_static_id => 'MY_AGENT',
    p_prompt          => 'What should I do next?',
    p_messages        => l_messages )
return clob;
```

Use this when the AI Agent is configured declaratively. `p_messages` is updated with the conversation.

Simple example:

```sql
declare
    l_messages apex_ai.t_chat_messages := apex_ai.c_chat_messages;
    l_answer   clob;
begin
    l_answer := apex_ai.chat(
        p_agent_static_id => 'support_agent',
        p_prompt          => 'Summarize the current ticket.',
        p_messages        => l_messages );
end;
/
```

### Signature 2: Service Chat

```sql
apex_ai.chat(
    p_prompt                     => '...',
    p_system_prompt              => '...',
    p_service_static_id          => 'MY_AI_SERVICE',
    p_temperature                => 0.2,
    p_messages                   => l_messages,
    p_tools                      => l_tools,
    p_response_handler_procedure => 'my_handler',
    p_max_tool_roundtrips        => 3 )
return clob;
```

Use this when code owns the prompt, model service, tool set, and optional response handler.

Complex example:

```sql
declare
    l_messages apex_ai.t_chat_messages := apex_ai.c_chat_messages;
    l_answer   clob;
begin
    l_answer := apex_ai.chat(
        p_service_static_id   => 'MY_AI_SERVICE',
        p_system_prompt       => 'Answer as a concise support analyst.',
        p_prompt              => 'What is the latest status for order 1001?',
        p_messages            => l_messages,
        p_max_tool_roundtrips => 2,
        p_tools               => apex_ai.t_tools(
            apex_ai.t_tool(
                name        => 'get_order_status',
                description => 'Return status for an order ID.',
                parameters  => apex_ai.t_tool_parameters(
                    apex_ai.t_tool_parameter(
                        name      => 'order_id',
                        data_type => apex_ai.c_tool_param_type_number ) ),
                callback_procedure => 'get_order_status_tool' ) ) );
end;
/
```

Deprecated signature 3 uses `p_config_static_id`. Do not use it for new work.

## `GENERATE`

### Signature 1: AI Agent Generate

```sql
apex_ai.generate(
    p_agent_static_id => 'MY_AGENT',
    p_prompt          => 'Analyze this file.',
    p_attachments     => l_attachments )
return clob;
```

Use this for a one-shot answer from a configured AI Agent. If the agent response format is JSON Object, the returned CLOB is a stringified JSON object.

Simple example:

```sql
declare
    l_answer clob;
begin
    l_answer := apex_ai.generate(
        p_agent_static_id => 'low_code_expert',
        p_prompt          => 'Explain this app feature in plain English.' );
end;
/
```

### Signature 2: Service Generate

```sql
apex_ai.generate(
    p_prompt                     => '...',
    p_system_prompt              => '...',
    p_service_static_id          => 'MY_AI_SERVICE',
    p_temperature                => 0,
    p_attachments                => l_attachments,
    p_response_json_schema       => l_schema,
    p_tools                      => l_tools,
    p_response_handler_procedure => 'my_handler',
    p_max_tool_roundtrips        => 3 )
return clob;
```

Use this for programmatic AI features: extraction, summarization, image/document analysis, ad-hoc tools, and structured JSON output.

Complex example with JSON Schema:

```sql
declare
    l_json sys.json_object_t;
begin
    l_json := sys.json_object_t(
        apex_ai.generate(
            p_service_static_id    => 'MY_AI_SERVICE',
            p_system_prompt        => 'Return only valid JSON.',
            p_prompt               => 'Classify this support request: Login fails after password reset.',
            p_response_json_schema => q'~{
                "type": "object",
                "properties": {
                    "category": { "type": "string" },
                    "priority": { "type": "string", "enum": ["low", "medium", "high"] },
                    "summary":  { "type": "string" }
                },
                "required": ["category", "priority", "summary"],
                "additionalProperties": false
            }~' ) );

    apex_debug.info('Category: %s', l_json.get_string('category'));
end;
/
```

Deprecated signature 3 uses `p_config_static_id` and no attachments. Do not use it for new work.

## Attachments Pattern

Assuming an APEX File Upload item stores rows in `APEX_APPLICATION_TEMP_FILES`:

```sql
declare
    l_attachments apex_ai.t_attachments := apex_ai.t_attachments();
begin
    for rec in (
        select mime_type, blob_content, filename
          from apex_application_temp_files
    ) loop
        l_attachments.extend;
        l_attachments(l_attachments.count).mime_type    := rec.mime_type;
        l_attachments(l_attachments.count).content_blob := rec.blob_content;
        l_attachments(l_attachments.count).file_name    := rec.filename;
    end loop;

    :P10_OUTPUT := apex_ai.generate(
        p_service_static_id => 'MY_AI_SERVICE',
        p_prompt            => :P10_PROMPT,
        p_attachments       => l_attachments );
end;
/
```

## Ad-Hoc Tool Pattern

Assuming a table `orders(order_id, status, updated_on)`:

```sql
create or replace procedure get_order_status_tool (
    p_param  in            apex_ai.t_tool_exec_param,
    p_result in out nocopy apex_ai.t_tool_exec_result )
as
begin
    select json_object(
               'order_id'   value order_id,
               'status'     value status,
               'updated_on' value to_char(updated_on, 'YYYY-MM-DD"T"HH24:MI:SS')
           )
      into p_result.result
      from orders
     where order_id = p_param.args_json.get_number('order_id');
end;
/

declare
    l_answer clob;
begin
    l_answer := apex_ai.generate(
        p_service_static_id => 'MY_AI_SERVICE',
        p_prompt            => 'What is the status of order 1001?',
        p_tools             => apex_ai.t_tools(
            apex_ai.t_tool(
                name        => 'get_order_status',
                description => 'Return the current status for an order.',
                parameters  => apex_ai.t_tool_parameters(
                    apex_ai.t_tool_parameter(
                        name      => 'order_id',
                        data_type => apex_ai.c_tool_param_type_number ) ),
                callback_procedure => 'get_order_status_tool' ) ) );

    sys.dbms_output.put_line(l_answer);
end;
/
```

## Response Handler Pattern

Use a response handler when one procedure should inspect all pending tool calls before execution.

```sql
create or replace procedure ai_response_handler (
    p_param  in            apex_ai.t_chat_response_handler_param,
    p_result in out nocopy apex_ai.t_chat_response_handler_result )
as
begin
    apex_debug.info('AI invocation: %s', p_param.invocation);

    if p_result.response.type = apex_ai.c_response_type_tool_calls then
        for i in 1 .. p_param.pending_tool_calls.count loop
            if p_param.pending_tool_calls(i).name = 'get_secret_number' then
                apex_ai.set_tool_result(
                    p_response_handler_param  => p_param,
                    p_response_handler_result => p_result,
                    p_tool_call               => p_param.pending_tool_calls(i),
                    p_result                  => '42' );
            end if;
        end loop;
    end if;
end;
/
```

Call it with `p_response_handler_procedure => 'ai_response_handler'`.

## `GET_AVAILABLE_TOKENS`

```sql
apex_ai.get_available_tokens(
    p_service_static_id => 'MY_AI_SERVICE' )
return number;
```

Returns the remaining configured token capacity. If no limits are configured, the return value can be `NULL`.

Example:

```sql
declare
    l_tokens number;
begin
    l_tokens := apex_ai.get_available_tokens('MY_AI_SERVICE');
    apex_debug.info('AI tokens remaining: %s', coalesce(to_char(l_tokens), 'unlimited/not configured'));
end;
/
```

## `GET_VECTOR_EMBEDDINGS`

Signature 1 uses a Vector Provider static ID:

```sql
l_vector := apex_ai.get_vector_embeddings(
    p_value             => 'expense approval policy',
    p_service_static_id => 'MY_ONNX_VECTOR_PROVIDER' );
```

Signature 2 uses a local ONNX model:

```sql
l_vector := apex_ai.get_vector_embeddings(
    p_value           => 'expense approval policy',
    p_local_llm_owner => 'AI_MODELS',
    p_local_llm_name  => 'MY_ONNX_MODEL' );
```

Signature 3 uses a custom PL/SQL embedding function:

```sql
l_vector := apex_ai.get_vector_embeddings(
    p_value         => 'expense approval policy',
    p_function_name => 'my_embedding_function' );
```

Use embeddings for semantic search, retrieval, clustering, and similarity.

## Feature And Consent APIs

```sql
if apex_ai.is_enabled then
    apex_debug.info('AI is enabled for this workspace.');
end if;
```

```sql
if apex_ai.is_user_consent_needed(
       p_user_name      => :APP_USER,
       p_application_id => :APP_ID ) then
    apex_debug.info('Show consent UI before AI call.');
end if;
```

```sql
begin
    apex_ai.set_user_consent(
        p_user_name      => :APP_USER,
        p_application_id => :APP_ID );
end;
/
```

```sql
begin
    apex_ai.revoke_user_consent(
        p_user_name      => :APP_USER,
        p_application_id => :APP_ID );
end;
/
```

```sql
begin
    apex_ai.revoke_user_consent_for_all(
        p_application_id => :APP_ID );
end;
/
```

## Declarative Tool Result Override

Inside declarative Generative AI Tools such as "Execute Server-side Code" or "Retrieve Data", override the tool result and notification:

```sql
begin
    apex_ai.set_tool_result(
        p_result               => 'Operation blocked by a business rule.',
        p_notification_message => 'Operation blocked.',
        p_notification_type    => apex_ai.c_notification_type_warning,
        p_early_exit           => true );
end;
/
```

Use `p_early_exit => true` when another model roundtrip is not useful.

## Safety Guidance

- Keep tools narrow and deterministic.
- Validate all model-provided arguments before using them in SQL or DML.
- Enforce authorization in PL/SQL callbacks and response handlers.
- Use typed tool parameters or JSON Schema.
- Use `p_max_tool_roundtrips` to limit loops.
- Log tool calls, token usage, response types, and failures.
- Treat uploaded files and model output as untrusted input.
- Validate JSON before DML, especially on database versions before automatic JSON Schema validation support.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants and Data Types | constants | [local](APEX_AI/Constants_and_Data_Types.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.Data-Types.html) |
| CHAT Function Signature 1 | function | [local](APEX_AI/CHAT_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-1.html) |
| CHAT Function Signature 2 | function | [local](APEX_AI/CHAT_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-2.html) |
| CHAT Function Signature 3 (Deprecated) | function | [local](APEX_AI/CHAT_Function_Signature_3_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-3.html) |
| GENERATE Function Signature 1 | function | [local](APEX_AI/GENERATE_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-1.html) |
| GENERATE Function Signature 2 | function | [local](APEX_AI/GENERATE_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-2.html) |
| GENERATE Function Signature 3 (Deprecated) | function | [local](APEX_AI/GENERATE_Function_Signature_3_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-3.html) |
| GET_AVAILABLE_TOKENS Function | function | [local](APEX_AI/GET_AVAILABLE_TOKENS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_AVAILABLE_TOKENS-Function.html) |
| GET_VECTOR_EMBEDDINGS Function Signature 1 | function | [local](APEX_AI/GET_VECTOR_EMBEDDINGS_Function_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-1.html) |
| GET_VECTOR_EMBEDDINGS Function Signature 2 | function | [local](APEX_AI/GET_VECTOR_EMBEDDINGS_Function_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-2.html) |
| GET_VECTOR_EMBEDDINGS Function Signature 3 | function | [local](APEX_AI/GET_VECTOR_EMBEDDINGS_Function_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-3.html) |
| IS_ENABLED Function | function | [local](APEX_AI/IS_ENABLED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.IS_ENABLED-Function.html) |
| IS_USER_CONSENT_NEEDED Function | function | [local](APEX_AI/IS_USER_CONSENT_NEEDED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.IS_USER_CONSENT_NEEDED-Function.html) |
| REVOKE_USER_CONSENT Procedure | procedure | [local](APEX_AI/REVOKE_USER_CONSENT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.REVOKE_USER_CONSENT-Procedure.html) |
| REVOKE_USER_CONSENT_FOR_ALL Procedure | procedure | [local](APEX_AI/REVOKE_USER_CONSENT_FOR_ALL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.REVOKE_USER_CONSENT_FOR_ALL-Procedure.html) |
| SET_TOOL_RESULT Procedure Signature 1 | procedure | [local](APEX_AI/SET_TOOL_RESULT_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_TOOL_RESULT-Procedure-Signature-1.html) |
| SET_TOOL_RESULT Procedure Signature 2 | procedure | [local](APEX_AI/SET_TOOL_RESULT_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_TOOL_RESULT-Procedure-Signature-2.html) |
| SET_USER_CONSENT Procedure | procedure | [local](APEX_AI/SET_USER_CONSENT_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_USER_CONSENT-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
