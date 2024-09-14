---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Country List

Use this API endpoint to get a list of countries for new account creation.

<div className="custom-block-peach">
- Endpoint: `/api/v1/countryList` 
- Method: `GET`
</div>

:::note
This endpoint does not require authentication.
:::

## Sample Request
<div className="custom-block-green">
 **GET**: `https://<api_url>/api/v1/countryList`
</div>

## Sample Response

<Tabs>  
  <TabItem value="ResponseJSON" label="Response JSON">
      ```jsx title="JSON"
{
    "result": {
       "countries": [
           {
               "_id": "5fdc52bf3e0f50213399537c",
               "objectId": "DlHQBjd2Ke",
               "code": "IN",
               "name": "India",
               "native": "भारत",
               "phone": "91",
               "capital": "New Delhi",
               "currency": "INR",
               "geonameid": "1269750",
               "__v": 0,
               "updatedAt": "2020-04-13T18:17:08.498Z",
               "createdAt": "2019-12-10T03:49:44.431Z"
           },
	    {..}
..]
    }
}
```
  </TabItem> 
</Tabs>