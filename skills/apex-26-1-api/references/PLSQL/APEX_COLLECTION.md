# APEX_COLLECTION

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html)

Status: curated first-pass reference.

## Purpose

`APEX_COLLECTION` manages session-scoped, table-like temporary data inside an APEX session. Collections are useful when an app needs to stage rows before final DML, keep wizard state, collect uploaded/spreadsheet rows, temporarily hold API results, or let users edit a working set without writing immediately to base tables.

Collections are tied to APEX session state. They are not permanent tables and should not be treated as durable storage.

## When To Use

Use `APEX_COLLECTION` when:

- A multi-step wizard needs a temporary row set.
- Uploaded or parsed rows need review before insert/update.
- A page process needs a working list of selected records.
- Data must survive page submits in the current APEX session.
- You need table-like access through `APEX_COLLECTIONS`.

Prefer real tables or global temporary tables when data must survive the session, be queried across users, require constraints, or support heavy relational logic.

## Data Model

Query collections through the `APEX_COLLECTIONS` view. Common columns include:

- `collection_name`
- `seq_id`
- character attributes such as `c001`, `c002`, ...
- number attributes such as `n001`, `n002`, ...
- date attributes such as `d001`, `d002`, ...
- large object attributes such as `clob001` and `blob001`

Use clear conventions in code. For example, define that `c001 = SKU`, `c002 = description`, `n001 = quantity`, and `n002 = unit price`.

## Common Member Groups

| Need | Members |
| --- | --- |
| Create or reset | `CREATE_COLLECTION`, `CREATE_OR_TRUNCATE_COLLECTION`, `TRUNCATE_COLLECTION` |
| Add rows | `ADD_MEMBER`, `ADD_MEMBERS`, `CREATE_COLLECTION_FROM_QUERY*` |
| Update rows | `UPDATE_MEMBER`, `UPDATE_MEMBERS`, `UPDATE_MEMBER_ATTRIBUTE` |
| Delete rows | `DELETE_MEMBER`, `DELETE_MEMBERS`, `DELETE_COLLECTION`, `DELETE_ALL_COLLECTIONS` |
| Inspect state | `COLLECTION_EXISTS`, `COLLECTION_MEMBER_COUNT`, `COLLECTION_HAS_CHANGED` |
| Ordering | `MOVE_MEMBER_UP`, `MOVE_MEMBER_DOWN`, `SORT_MEMBERS`, `RESEQUENCE_COLLECTION` |
| Change tracking | `GET_MEMBER_MD5`, `RESET_COLLECTION_CHANGED`, `RESET_COLLECTION_CHANGED_ALL` |

## Simple Example

Create a cart-like collection and add one row:

```sql
begin
    apex_collection.create_or_truncate_collection(
        p_collection_name => 'CART');

    apex_collection.add_member(
        p_collection_name => 'CART',
        p_c001            => 'SKU-100',
        p_c002            => 'USB-C Adapter',
        p_n001            => 2,
        p_n002            => 19.99);
end;
/
```

Read the staged rows:

```sql
select seq_id,
       c001 as sku,
       c002 as description,
       n001 as quantity,
       n002 as unit_price,
       n001 * n002 as line_total
  from apex_collections
 where collection_name = 'CART'
 order by seq_id;
```

## More Complex Example

Assuming a checkout flow stages cart rows in `CART` and writes to `order_lines` only when the user confirms:

```sql
declare
    l_order_id number := :P50_ORDER_ID;
begin
    for rec in (
        select c001 sku,
               n001 quantity,
               n002 unit_price
          from apex_collections
         where collection_name = 'CART'
         order by seq_id
    ) loop
        insert into order_lines (
            order_id,
            sku,
            quantity,
            unit_price )
        values (
            l_order_id,
            rec.sku,
            rec.quantity,
            rec.unit_price );
    end loop;

    apex_collection.delete_collection(
        p_collection_name => 'CART');
end;
/
```

## Update Pattern

Update one attribute when the user changes quantity:

```sql
begin
    apex_collection.update_member_attribute(
        p_collection_name => 'CART',
        p_seq             => :P50_SEQ_ID,
        p_attr_number     => 1,
        p_number_value    => :P50_QUANTITY);
end;
/
```

Use the generated local detail pages to choose the correct `UPDATE_MEMBER_ATTRIBUTE` signature for character, number, date, CLOB, or BLOB values.

## Query-Based Load Pattern

Assuming a table `products(product_id, sku, product_name, unit_price)`, stage a product subset:

```sql
begin
    apex_collection.create_collection_from_query(
        p_collection_name => 'PRODUCT_REVIEW',
        p_query           => q'[
            select sku,
                   product_name,
                   unit_price
              from products
             where active_flag = 'Y'
        ]');
end;
/
```

Use bind-aware signatures where possible. Avoid no-bind query construction with user input.

## Safety Guidance

- Collections are per APEX session; do not use them as permanent storage.
- Always define and document what each attribute slot means.
- Do not concatenate user input into query text.
- Clean up collections when a workflow completes.
- Use `COLLECTION_EXISTS` before reading when the page can be reached in multiple ways.
- Resequence only when the UI depends on contiguous row ordering.
- Remember that collection contents can affect authorization-sensitive processing; validate again before final DML.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| About the APEX_COLLECTION API | about | [local](APEX_COLLECTION/About_the_APEX_COLLECTION_API.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_COLLECTION-API.html) |
| Accessing a Collection | topic | [local](APEX_COLLECTION/Accessing_a_Collection.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Accessing-a-Collection.html) |
| Determining Collection Status | topic | [local](APEX_COLLECTION/Determining_Collection_Status.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Determining-Collection-Status.html) |
| Clearing Collection Session State | topic | [local](APEX_COLLECTION/Clearing_Collection_Session_State.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Clearing-Collection-Session-State.html) |
| ADD_MEMBER Procedure | procedure | [local](APEX_COLLECTION/ADD_MEMBER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_MEMBER-Procedure.html) |
| ADD_MEMBER Function | function | [local](APEX_COLLECTION/ADD_MEMBER_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_MEMBER-Function.html) |
| ADD_MEMBERS Procedure | procedure | [local](APEX_COLLECTION/ADD_MEMBERS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_MEMBERS-Procedure.html) |
| COLLECTION_EXISTS Function | function | [local](APEX_COLLECTION/COLLECTION_EXISTS_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_EXISTS-Function.html) |
| COLLECTION_HAS_CHANGED Function | function | [local](APEX_COLLECTION/COLLECTION_HAS_CHANGED_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_HAS_CHANGED-Function.html) |
| COLLECTION_MEMBER_COUNT Function | function | [local](APEX_COLLECTION/COLLECTION_MEMBER_COUNT_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_MEMBER_COUNT-Function.html) |
| CREATE_COLLECTION Procedure | procedure | [local](APEX_COLLECTION/CREATE_COLLECTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION-Procedure.html) |
| CREATE_COLLECTION_FROM_QUERY Procedure | procedure | [local](APEX_COLLECTION/CREATE_COLLECTION_FROM_QUERY_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY-Procedure.html) |
| CREATE_COLLECTION_FROM_QUERY2 Procedure | procedure | [local](APEX_COLLECTION/CREATE_COLLECTION_FROM_QUERY2_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY2-Procedure.html) |
| CREATE_COLLECTION_FROM_QUERY_B Procedure | procedure | [local](APEX_COLLECTION/CREATE_COLLECTION_FROM_QUERY_B_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY_B-Procedure.html) |
| CREATE_COLLECTION_FROM_QUERY_B Procedure (No bind version) | procedure | [local](APEX_COLLECTION/CREATE_COLLECTION_FROM_QUERY_B_Procedure_(No_bind_version).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY_B-Procedure-NBV.html) |
| CREATE_COLLECTION_FROM_QUERYB2 Procedure | procedure | [local](APEX_COLLECTION/CREATE_COLLECTION_FROM_QUERYB2_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERYB2-Procedure.html) |
| CREATE_COLLECTION_FROM_QUERYB2 Procedure (No bind version) | procedure | [local](APEX_COLLECTION/CREATE_COLLECTION_FROM_QUERYB2_Procedure_(No_bind_version).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERYB2-Procedure-NBV.html) |
| CREATE_OR_TRUNCATE_COLLECTION Procedure | procedure | [local](APEX_COLLECTION/CREATE_OR_TRUNCATE_COLLECTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_OR_TRUNCATE_COLLECTION-Procedure.html) |
| DELETE_ALL_COLLECTIONS Procedure | procedure | [local](APEX_COLLECTION/DELETE_ALL_COLLECTIONS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_ALL_COLLECTIONS-Procedure.html) |
| DELETE_ALL_COLLECTIONS_SESSION Procedure | procedure | [local](APEX_COLLECTION/DELETE_ALL_COLLECTIONS_SESSION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_ALL_COLLECTIONS_SESSION-Procedure.html) |
| DELETE_COLLECTION Procedure | procedure | [local](APEX_COLLECTION/DELETE_COLLECTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_COLLECTION-Procedure.html) |
| DELETE_MEMBER Procedure | procedure | [local](APEX_COLLECTION/DELETE_MEMBER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_MEMBER-Procedure.html) |
| DELETE_MEMBERS Procedure | procedure | [local](APEX_COLLECTION/DELETE_MEMBERS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_MEMBERS-Procedure.html) |
| GET_MEMBER_MD5 Function | function | [local](APEX_COLLECTION/GET_MEMBER_MD5_Function.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html) |
| MERGE_MEMBERS Procedure | procedure | [local](APEX_COLLECTION/MERGE_MEMBERS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MERGE_MEMBERS-Procedure.html) |
| MOVE_MEMBER_DOWN Procedure | procedure | [local](APEX_COLLECTION/MOVE_MEMBER_DOWN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MOVE_MEMBER_DOWN-Procedure.html) |
| MOVE_MEMBER_UP Procedure | procedure | [local](APEX_COLLECTION/MOVE_MEMBER_UP_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MOVE_MEMBER_UP-Procedure.html) |
| RESEQUENCE_COLLECTION Procedure | procedure | [local](APEX_COLLECTION/RESEQUENCE_COLLECTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESEQUENCE_COLLECTION-Procedure.html) |
| RESET_COLLECTION_CHANGED Procedure | procedure | [local](APEX_COLLECTION/RESET_COLLECTION_CHANGED_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_COLLECTION_CHANGED-Procedure.html) |
| RESET_COLLECTION_CHANGED_ALL Procedure | procedure | [local](APEX_COLLECTION/RESET_COLLECTION_CHANGED_ALL_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_COLLECTION_CHANGED_ALL-Procedure.html) |
| SORT_MEMBERS Procedure | procedure | [local](APEX_COLLECTION/SORT_MEMBERS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SORT_MEMBERS-Procedure.html) |
| TRUNCATE_COLLECTION Procedure | procedure | [local](APEX_COLLECTION/TRUNCATE_COLLECTION_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRUNCATE_COLLECTION-Procedure.html) |
| UPDATE_MEMBER Procedure | procedure | [local](APEX_COLLECTION/UPDATE_MEMBER_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER-Procedure.html) |
| UPDATE_MEMBERS Procedure | procedure | [local](APEX_COLLECTION/UPDATE_MEMBERS_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBERS-Procedure.html) |
| UPDATE_MEMBER_ATTRIBUTE Procedure Signature 1 | procedure | [local](APEX_COLLECTION/UPDATE_MEMBER_ATTRIBUTE_Procedure_Signature_1.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-1.html) |
| UPDATE_MEMBER_ATTRIBUTE Procedure Signature 2 | procedure | [local](APEX_COLLECTION/UPDATE_MEMBER_ATTRIBUTE_Procedure_Signature_2.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-2.html) |
| UPDATE_MEMBER_ATTRIBUTE Procedure Signature 3 | procedure | [local](APEX_COLLECTION/UPDATE_MEMBER_ATTRIBUTE_Procedure_Signature_3.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-3.html) |
| UPDATE_MEMBER_ATTRIBUTE Procedure Signature 4 | procedure | [local](APEX_COLLECTION/UPDATE_MEMBER_ATTRIBUTE_Procedure_Signature_4.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-4.html) |
| UPDATE_MEMBER_ATTRIBUTE Procedure Signature 5 | procedure | [local](APEX_COLLECTION/UPDATE_MEMBER_ATTRIBUTE_Procedure_Signature_5.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-5.html) |
| UPDATE_MEMBER_ATTRIBUTE Procedure Signature 6 | procedure | [local](APEX_COLLECTION/UPDATE_MEMBER_ATTRIBUTE_Procedure_Signature_6.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-6.html) |

<!-- END GENERATED MEMBER LINKS -->
