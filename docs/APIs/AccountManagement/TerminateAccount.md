---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Terminate Account

This will put the account in a `terminated` state and the subscriber will not be able to do any action or view any information. Further, the account will be removed from all systems. This action is **not reversible**.

<div className="custom-block-peach">
- Endpoint: `/api/v1/serv_terminateUserAccount/<user_id>` 
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
	 **PUT**: `https://<api_url>/api/v1/serv_terminateUserAccount/123?manual=true`
</div>