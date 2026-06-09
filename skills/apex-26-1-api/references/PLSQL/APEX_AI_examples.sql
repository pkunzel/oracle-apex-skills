--------------------------------------------------------------------------------
-- Oracle APEX 26.1 APEX_AI Examples
--
-- Companion examples for Documentation/APEX_AI_26_1_Guide.md.
-- Replace app IDs, page item names, table names, and service static IDs before use.
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
-- 1. Basic GENERATE call through a configured AI service
--------------------------------------------------------------------------------
declare
    l_response clob;
begin
    l_response := apex_ai.generate(
        p_service_static_id => 'MY_AI_SERVICE',
        p_system_prompt     => 'You are an expert in Oracle APEX.',
        p_prompt            => 'Explain Oracle APEX in two paragraphs.' );

    sys.dbms_output.put_line(l_response);
end;
/

--------------------------------------------------------------------------------
-- 2. Conversational CHAT call with retained message history
--------------------------------------------------------------------------------
declare
    l_messages  apex_ai.t_chat_messages := apex_ai.c_chat_messages;
    l_response1 clob;
    l_response2 clob;
begin
    l_response1 := apex_ai.chat(
        p_service_static_id => 'MY_AI_SERVICE',
        p_system_prompt     => 'You are an expert in Oracle APEX.',
        p_prompt            => 'What is Oracle APEX?',
        p_messages          => l_messages );

    l_response2 := apex_ai.chat(
        p_service_static_id => 'MY_AI_SERVICE',
        p_prompt            => 'What are good AI Agent demo ideas?',
        p_messages          => l_messages );

    sys.dbms_output.put_line(l_response1);
    sys.dbms_output.put_line(l_response2);
end;
/

--------------------------------------------------------------------------------
-- 3. Generate from uploaded attachments in APEX_APPLICATION_TEMP_FILES
--
-- Expected page items:
--   P2_PROMPT  Text Field
--   P2_INPUT   File Upload, Storage Type: APEX_APPLICATION_TEMP_FILES
--   P2_OUTPUT  Rich Text Editor or Display Only item
--------------------------------------------------------------------------------
declare
    l_attachments apex_ai.t_attachments := apex_ai.t_attachments();
begin
    for rec in (
        select mime_type,
               blob_content,
               filename
          from apex_application_temp_files
    ) loop
        l_attachments.extend;
        l_attachments(l_attachments.count).mime_type    := rec.mime_type;
        l_attachments(l_attachments.count).content_blob := rec.blob_content;
        l_attachments(l_attachments.count).file_name    := rec.filename;
    end loop;

    :P2_OUTPUT := apex_ai.generate(
        p_service_static_id => 'MY_AI_SERVICE',
        p_prompt            => :P2_PROMPT,
        p_attachments       => l_attachments );
end;
/

--------------------------------------------------------------------------------
-- 4. Image/document analysis with JSON Schema output
--
-- Expected page items:
--   P3_INPUT        File Upload
--   P3_DESCRIPTION  Text Field
--   P3_TEXT         Text Field
--   P3_COLORS       Text Field
--------------------------------------------------------------------------------
declare
    l_file   apex_application_temp_files%rowtype;
    l_result sys.json_object_t;
begin
    select *
      into l_file
      from apex_application_temp_files
     where name = :P3_INPUT;

    l_result := sys.json_object_t(
        apex_ai.generate(
            p_service_static_id => 'MY_AI_SERVICE',
            p_prompt            => 'Analyze the uploaded file.',
            p_attachments       => apex_ai.t_attachments(
                apex_ai.t_attachment(
                    mime_type    => l_file.mime_type,
                    content_blob => l_file.blob_content,
                    file_name    => l_file.filename ) ),
            p_response_json_schema => q'~{
                "type": "object",
                "properties": {
                    "description": {
                        "type": "string",
                        "description": "A brief description of the file."
                    },
                    "text": {
                        "type": "string",
                        "description": "Any text found in the file."
                    },
                    "colors": {
                        "type": "string",
                        "description": "Visible colors as comma-separated hex values, if relevant."
                    }
                },
                "required": ["description", "text", "colors"],
                "additionalProperties": false
            }~' ) );

    :P3_DESCRIPTION := l_result.get_string('description');
    :P3_TEXT        := l_result.get_string('text');
    :P3_COLORS      := l_result.get_string('colors');
end;
/

--------------------------------------------------------------------------------
-- 5. Ad-hoc agent pattern: one callback procedure per tool
--
-- Example tables assumed:
--   projects(project_id, project_name, status, manager_name)
--   employees(employee_id, full_name)
--   time_entries(project_id, employee_id, hours_logged, task_description, log_date)
--------------------------------------------------------------------------------
create or replace procedure find_project_proc (
    p_param  in            apex_ai.t_tool_exec_param,
    p_result in out nocopy apex_ai.t_tool_exec_result )
as
begin
    select json_object(
               'project_id'   value p.project_id,
               'project_name' value p.project_name,
               'status'       value p.status,
               'manager'      value p.manager_name
           )
      into p_result.result
      from projects p
     where lower(p.project_name) like '%' || lower(p_param.args_json.get_string('project_name')) || '%'
       and rownum = 1;
end find_project_proc;
/

create or replace procedure get_time_entries_proc (
    p_param  in            apex_ai.t_tool_exec_param,
    p_result in out nocopy apex_ai.t_tool_exec_result )
as
begin
    select json_arrayagg(
               json_object(
                   'employee' value e.full_name,
                   'hours'    value t.hours_logged,
                   'task'     value t.task_description,
                   'log_date' value to_char(t.log_date, 'YYYY-MM-DD')
               )
           )
      into p_result.result
      from time_entries t
      join employees e
        on e.employee_id = t.employee_id
     where t.project_id = p_param.args_json.get_number('project_id')
       and t.log_date >= trunc(sysdate, 'MM');
end get_time_entries_proc;
/

declare
    l_result clob;
begin
    l_result := apex_ai.generate(
        p_service_static_id => 'MY_AI_SERVICE',
        p_prompt            => 'How much time has the team logged on the Alpha project this month?',
        p_tools             => apex_ai.t_tools(
            apex_ai.t_tool(
                name               => 'find_project',
                description        => 'Look up a project by name and return its ID and details.',
                callback_procedure => 'find_project_proc',
                parameters         => apex_ai.t_tool_parameters(
                    apex_ai.t_tool_parameter(
                        name        => 'project_name',
                        description => 'Project name or partial project name.',
                        data_type   => apex_ai.c_tool_param_type_varchar2 ) ) ),
            apex_ai.t_tool(
                name               => 'get_time_entries',
                description        => 'Retrieve current-month time entries for a project.',
                callback_procedure => 'get_time_entries_proc',
                parameters         => apex_ai.t_tool_parameters(
                    apex_ai.t_tool_parameter(
                        name        => 'project_id',
                        description => 'Numeric project identifier.',
                        data_type   => apex_ai.c_tool_param_type_number ) ) ) ) );

    sys.dbms_output.put_line(l_result);
end;
/

--------------------------------------------------------------------------------
-- 6. Ad-hoc agent pattern: one response handler for all tool calls
--------------------------------------------------------------------------------
create or replace procedure project_response_handler (
    p_param  in            apex_ai.t_chat_response_handler_param,
    p_result in out nocopy apex_ai.t_chat_response_handler_result )
as
    l_result clob;
begin
    sys.dbms_output.put_line('Invocation: ' || p_param.invocation);
    sys.dbms_output.put_line('Tokens used: ' || p_result.response.total_tokens);

    if p_result.response.type = apex_ai.c_response_type_tool_calls then
        for i in 1 .. p_param.pending_tool_calls.count loop
            l_result := null;

            if p_param.pending_tool_calls(i).name = 'find_project' then
                select json_object(
                           'project_id'   value p.project_id,
                           'project_name' value p.project_name,
                           'status'       value p.status,
                           'manager'      value p.manager_name
                       )
                  into l_result
                  from projects p
                 where lower(p.project_name) like '%' || lower(p_param.pending_tool_calls(i).args_json.get_string('project_name')) || '%'
                   and rownum = 1;

            elsif p_param.pending_tool_calls(i).name = 'get_time_entries' then
                select json_arrayagg(
                           json_object(
                               'employee' value e.full_name,
                               'hours'    value t.hours_logged,
                               'task'     value t.task_description,
                               'log_date' value to_char(t.log_date, 'YYYY-MM-DD')
                           )
                       )
                  into l_result
                  from time_entries t
                  join employees e
                    on e.employee_id = t.employee_id
                 where t.project_id = p_param.pending_tool_calls(i).args_json.get_number('project_id')
                   and t.log_date >= trunc(sysdate, 'MM');
            else
                l_result := 'Unsupported tool: ' || p_param.pending_tool_calls(i).name;
            end if;

            apex_ai.set_tool_result(
                p_response_handler_param  => p_param,
                p_response_handler_result => p_result,
                p_tool_call               => p_param.pending_tool_calls(i),
                p_result                  => l_result );
        end loop;
    end if;
end project_response_handler;
/

declare
    l_result clob;
begin
    l_result := apex_ai.generate(
        p_service_static_id          => 'MY_AI_SERVICE',
        p_prompt                     => 'How much time has the team logged on the Alpha project this month?',
        p_response_handler_procedure => 'project_response_handler',
        p_max_tool_roundtrips        => 3,
        p_tools                      => apex_ai.t_tools(
            apex_ai.t_tool(
                name        => 'find_project',
                description => 'Look up a project by name and return its ID and details.',
                parameters  => apex_ai.t_tool_parameters(
                    apex_ai.t_tool_parameter(
                        name      => 'project_name',
                        data_type => apex_ai.c_tool_param_type_varchar2 ) ) ),
            apex_ai.t_tool(
                name        => 'get_time_entries',
                description => 'Retrieve current-month time entries for a project.',
                parameters  => apex_ai.t_tool_parameters(
                    apex_ai.t_tool_parameter(
                        name      => 'project_id',
                        data_type => apex_ai.c_tool_param_type_number ) ) ) ) );

    sys.dbms_output.put_line(l_result);
end;
/

--------------------------------------------------------------------------------
-- 7. Tool result override and early exit from declarative AI tool code
--------------------------------------------------------------------------------
begin
    apex_ai.set_tool_result(
        p_result               => 'The requested operation was blocked by a business rule.',
        p_notification_message => 'Operation blocked by a business rule.',
        p_notification_type    => apex_ai.c_notification_type_warning,
        p_early_exit           => true );
end;
/

--------------------------------------------------------------------------------
-- 8. Token, feature, and consent checks
--------------------------------------------------------------------------------
declare
    l_available_tokens number;
    l_ai_enabled       boolean;
    l_consent_needed   boolean;
begin
    l_available_tokens := apex_ai.get_available_tokens(
        p_service_static_id => 'MY_AI_SERVICE' );

    l_ai_enabled     := apex_ai.is_enabled;
    l_consent_needed := apex_ai.is_user_consent_needed;

    sys.dbms_output.put_line('Available tokens: ' || l_available_tokens);
    sys.dbms_output.put_line('AI enabled: ' || case when l_ai_enabled then 'Yes' else 'No' end);
    sys.dbms_output.put_line('Consent needed: ' || case when l_consent_needed then 'Yes' else 'No' end);
end;
/

--------------------------------------------------------------------------------
-- 9. Vector embedding examples
--------------------------------------------------------------------------------
declare
    l_vector vector;
begin
    l_vector := apex_ai.get_vector_embeddings(
        p_value             => 'What is Oracle APEX?',
        p_service_static_id => 'MY_ONNX_VECTOR_PROVIDER' );
end;
/

