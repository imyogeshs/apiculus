---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Enable Account

This will reverse the `disabled` or `restricted` account states and reactivate the account.

<div className="custom-block-peach">
- Endpoint: `/api/v1/serv_enableUserAccount/<user_id>` 
- Method: `PUT`
</div>

:::note
This endpoint will only work with authenticated admin tokens, i.e., `<user_token>` obtained from the `/auth/login` endpoint with valid admin credentials.
:::

## Request Headers

|Header name|Required|Description|
|---|---|---|
|x-access-token|`true`|Pass the `<user_token`> as obtained from the `/auth/login` endpoint.|

## Request Query Parameters

|Parameter name|Required|Description|
|---|---|---|
|manual|`true`|true|

## Sample Request
<div className="custom-block-green">
	 **PUT**: `https://<api_url>/api/v1/serv_enableUserAccount/123?manual=true`
</div>