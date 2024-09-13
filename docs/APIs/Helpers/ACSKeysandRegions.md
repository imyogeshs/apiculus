---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ACS Keys and Regions

This endpoint will return the configured CloudStack regions and their keys based on the user’s `token`.

<div className="custom-block-peach">
- Endpoint: `/api/v1/op_listkeys` 
- Method: `GET`
</div>

## Request Headers

| Header name    | Required | Description                                                          |
| -------------- | -------- | -------------------------------------------------------------------- |
| x-access-token | `true`   | Pass the `<user_token>` as obtained from the `/auth/login` endpoint. |
## Sample Request
<div className="custom-block-green">
 **GET**: `https://<api_url>/api/v1/op_listkeys`
</div>

## Sample Response
<Tabs>  
  <TabItem value="ResponseJSON" label="Response JSON">
      ```jsx title="JSON"
{
   "httpStatus": 200,
   "success": true,
   "jobId": "68b7e162-05cd-444b-9c61-5727acfde928",
   "result": {
       "properties": {
           "records": [ {
                   "key": "apiKey",
                   "value": "<api_key_value>",
                   "region": "karnataka"
               },  {
                   "key": "secretKey",
                   "value": "<secret_key_value>",
                   "region": "karnataka"
               }, {
                   "key": "userid",
                   "value": "<user_id>",
                   "region": "karnataka"
               } ]
       }
   }
}
```
</TabItem> 
</Tabs>