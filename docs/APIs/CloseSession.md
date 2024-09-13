---
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Close Session (Logout)

This will logout the authenticated user and close the session.

:::note
This endpoint will only work with authenticated admin tokens, i.e., `<user_token>` obtained from the `/auth/login` endpoint with valid admin credentials.
:::

<div className="custom-block-peach">
- Endpoint: `/auth/logout` 
- Method: `POST`
</div>

## Request Headers

|Header name|Required|Description|
|---|---|---|
|x-access-token|`true`|Pass the `<user_token`> as obtained from the `/auth/login` endpoint.|

## Sample Request
<div className="custom-block-green">
 **POST**: `https://<api_url>/auth/logout`
</div>
