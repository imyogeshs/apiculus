---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Restrict Account
This will put the account in a `restricted` state and the subscriber will not be able to purchase any new resources. This action is reversible using the Enable Account endpoint.

<div className="custom-block-peach">
- Endpoint: `/api/v1/serv_restrictUserAccount/<user_id>` 
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
 **PUT**: `https://<api_url>/api/v1/serv_restrictUserAccount/123?manual=true`
</div>


