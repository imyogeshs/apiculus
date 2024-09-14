---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tax Categories

This API will return available tax categories, tax types and currencies.

<div className="custom-block-peach">
- Endpoint: `/api/pass/signUpHelper` 
- Method: `GET`
</div>

:::note
This endpoint will only work with authenticated admin tokens, i.e., `<user_token>` obtained from the `/auth/login` endpoint with valid admin credentials.
:::
## Request Headers

| Header name    | Required | Description                                                          |
| -------------- | -------- | -------------------------------------------------------------------- |
| x-access-token | `true`   | Pass the `<user_token>` as obtained from the `/auth/login` endpoint. |

## Sample Request
<div className="custom-block-green">
 **GET**: `https://<api_url>/api/pass/signUpHelper`
</div>

## Sample Response
<Tabs>
    <TabItem value="ResponseJSON" label="Response JSON">
      ```jsx title="JSON"
{
   "httpStatus": 200,
   "success": true,
   "error": {},
   "sync": true,
   "jobId": "9db5b9e8-3dc4-4dc7-8df8-a60fef3a8d88",
   "jobStatusCode": 1,
   "cached": false,
   "replayed": false,
   "result": {
       "currency": ["INR", "RWF", "OMR"],
       "acsRegion": ["noida"],
       "tax_category": [
           {
               "displayText": "Indian Organisation or Individual (Non-SEZ)",
               "value": "Taxable"
           },
           {
               "displayText": "Indian Organisation or Individual (Located in a SEZ)",
               "value": "SEZ"
           },
           {
               "displayText": "Non-Indian Organisation or Individual (Located Outside India)",
               "value": "EMBASSY"
           }
       ],
       "tax_types": [
           {
               "name": "CNPJ",
               "validation": {
                   "alpha_num": true,
                   "required": true,
                   "min": 11,
                   "max": 15
               }
           },
           {
               "name": "GSTIN",
               "validation": {
                   "alpha_num": true,
                   "required": false,
                   "min": 10,
                   "max": 10
               }
           }
       ]
   }
}
```
</TabItem>
</Tabs>