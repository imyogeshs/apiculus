---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authenticate Session (Login)

This endpoint will authenticate the user session based on a valid `email` and `password` combination and return a valid `token`.

<div className="custom-block-peach">
- Endpoint: `/auth/login` 
- Method: `POST`
</div>

:::note
Session authentication using this endpoint is not supported if 2FA is turned ON.
:::

## Request Parameters

|Parameter name|Required|Description|
|---|---|---|
|email|`true`|Email ID of a valid/existing user|
|password|`true`|Password for the valid/existing user|

## Sample Request
<div className="custom-block-green">
 **POST**: `https://<api_url>/auth/login`
</div>


<Tabs>
  <TabItem value="Body" label="Body" default>
      ```jsx title="JSON"
{ 
"email": "sample@gmail.com", 
"password": "Py%@hTff3"
}
```
  </TabItem>
  <TabItem value="ResponseJSON" label="Response JSON">
      ```jsx title="JSON"
{
   "httpStatus": 200,
   "success": true,
   "result": {
       "token": "<user_token>",
       "onboarded": true,
       "account_type": 0,
       "currency": "INR",
       "last_logged_in": "2022-12-09T06:36:51.000Z",
       "paymentCurrency": "INR"
   }
}
```
  </TabItem>
  <TabItem value="AccountTypes" label="Account Types">
  ```jsx title="JSON"
0: Retail user (subscriber), created from the self-service signup UI
1: Enterprise user (subscriber), created using API or with admin intervention on the UI
11: Admin user, can be created from the SP admin UI.
12: Superadmin user, can not be created from the UI or using API.
```
  </TabItem>
</Tabs>