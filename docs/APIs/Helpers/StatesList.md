---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# States List

Use this API endpoint to get the list of states/regions within a country for new account creation.

<div className="custom-block-peach">
- Endpoint: `/api/v1/stateList` 
- Method: `GET`
</div>

:::note
This endpoint does not require authentication.
:::

## Query Parameters

| Parameter name    | Required | Description                                                          |
| -------------- | -------- | -------------------------------------------------------------------- |
| code | `true`   | Pass the `<objectId>` value as obtained from the `/api/v1/countryList endpoint`. |

## Sample Request
<div className="custom-block-green">
 **GET**: `https://<api_url>/api/v1/stateList?code=<country_object_code>`
</div>


## Sample Response
<Tabs>
  
  <TabItem value="ResponseJSON" label="Response JSON">
      ```jsx title="JSON"
{
   "result": {
       "state": [
           {
               "_id": "6007e49c2cf42e21e8782809",
               "objectId": "DlHQBjd2Ke",
               "Country_Code": "IN",
               "Subdivision_Code": "AR",
               "Subdivision_Name": "Arunachal Pradesh",
               "Subdivion_Type": "State",
               "__v": 0,
               "updatedAt": "2020-02-19T14:32:39.837Z",
               "createdAt": "2020-02-17T21:53:47.773Z"
           },
	    {...}
	 ..]
     }
}
```
  </TabItem>
 
</Tabs>