---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Account

Use this API endpoint to create a subscriber account.

<div className="custom-block-peach">
- Endpoint: `/api/pass/createNewUser` 
- Method: `POST`
</div>

:::note
This endpoint will only work with authenticated admin tokens, i.e., `<user_token>` obtained from the `/auth/login` endpoint with valid admin credentials.
:::

:::note
This endpoint will create subscriber accounts with `account_type` as `1`, i.e., tagged as `Enterprise`, with all business rules applicable as defined for `Enterprise` accounts. The account will be created with the identifier `E` in the account ID.
:::

## Request Headers

| Header name    | Required | Description                                                          |
| -------------- | -------- | -------------------------------------------------------------------- |
| x-access-token | `true`   | Pass the `<user_token>` as obtained from the `/auth/login` endpoint. |
## Request Parameters
| Parameters name   | Required      | Description                                                                                                                                                                                                                      |
| ----------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fname             | `true`        | First name of the primary subscriber user; only alphabets allowed; should not exceed 255 characters.                                                                                                                             |
| lname             | `true`        | Last name of the primary subscriber user; only alphabets allowed; should not exceed 255 characters.                                                                                                                              |
| organization_name | `true`        | Organisation name; alphanumeric allowed; maximum length 255 characters.                                                                                                                                                          |
| email             | `true`        | Email address of the primary subscriber user; maximum length 255 characters.                                                                                                                                                     |
| countryCode       | `true`        | Country code obtained from the` countryLis`t or `stateList` endpoints; should not exceed 4 characters.                                                                                                                           |
| mobileNumber      | `true`        | Phone/mobile number of the primary subscriber user; Should have the no. of digits as specified under SP admin → Settings.                                                                                                        |
| password          | `true`        | Combination of upper and lower case alphabets, numbers and symbols; must follow password length policy as defined under SP admin → Settings; case sensitive.                                                                     |
| acsRegion         | `optional`    | Preferred CloudStack region; use any one region from the response of the `signUpHelper` endpoint; case sensitive.                                                                                                                |
| address           | `true`        | Primary address of the subscriber account/organisation; should not exceed 255 characters.                                                                                                                                        |
| city              | `true`        | City; should not exceed 255 characters.                                                                                                                                                                                          |
| state             | `true`        | State; use `Subdivision_Code` received as a response from the `stateList` endpoint; case sensitive.                                                                                                                              |
| country           | `true`        | Country; use `Country_Code` received as a response from the `stateList` endpoint; case sensitive.                                                                                                                                |
| zipcode           | `optional`    | Zip/postal code of the subscriber account/oprganisation; only numbers allowed.                                                                                                                                                   |
| currency          | `true`        | Currency to create the new subscriber account with; only supported currencies obtained from the `signUpHelper` endpoint allowed; use any supported currency code;; case sensitive.                                               |
| tax_category      | `true`        | Taxability category for this subscriber account; use the correct `tax_category` as obtained from the `signUpHelper` endpoint; use the `value` item for the relevant category; case sensitive.                                    |
| tax_type1         | `optional`    | Tax type(s) required for subscriber account information; use `tax_types` as obtained from the `signUpHelper` endpoint; use the `name` item from the tax types array; case sensitive; max 3 tax types and taxation IDs supported. |
| taxation_id1      | conditional`  | Taxation ID for tax_type1; validation conditional on `required`, `alpha_num`, `min` and `max` for the `tax_type1` as obtained from the `signUpHelper` endpoint.                                                                  |
| tax_type2         | `optional`    | Tax type(s) required for subscriber account information; use `tax_types` as obtained from the `signUpHelper` endpoint; use the `name` item from the tax types array; case sensitive; max 3 tax types and taxation IDs supported. |
| taxation_id2      | `conditional` | Taxation ID for `tax_type2`; validation conditional on `required`, `alpha_num`, `min` and `max` for the `tax_type2` as obtained from the `signUpHelper` endpoint.                                                                |
| tax_type3         | `optional`    | Tax type(s) required for subscriber account information; use `tax_types` as obtained from the `signUpHelper` endpoint; use the `name item` from the tax types array; case sensitive; max 3 tax types and taxation IDs supported. |
| taxation_id3      | `conditional` | Taxation ID for `tax_type3`; validation conditional on `required`, `alpha_num`, `min` and `max` for the `tax_type3` as obtained from the `signUpHelper` endpoint.                                                                |
| credit_period     | `true`        | Default credit period or invoice due date delay for this subscriber account; number between 1 and 30.                                                                                                                            |
| credit_limit      | `true`        | Default credit limit for this subscriber account; any number greater than or equal to `0`.                                                                                                                                       |
| resellerCode      | `true`        | Reseller code to tag this subscriber account with, if available.                                                                                                                                                                 |

## Sample Request
<div className="custom-block-green">
 **POST**: `https://<api_url>/api/pass/createNewUser`
</div>


<Tabs>
   <TabItem value="RequestBody" label="Request Body">
  ```jsx title="JSON"
{
   "fname": "user",
   "lname": "sample",
   "email": "usersample@gmail.com",
   "organization_name": “Indiqus",
   "countryCode": "91",
   "mobileNumber": "9876543210",
   "password": "UserSam@178",
   "acsRegion": "noida",
   "address": "xyz street",
   "city": "Bangalore",
   "state": "Karnataka",
   "country": "IN",
   "zipcode": 607878,
   "currency": "INR",
   "tax_category": "Taxable",
   "tax_type1": "CNPJ",
   "taxation_id1": "3453242343234",
   "tax_type2": "GSTIN",
   "taxation_id2": "1234567890",
   "tax_type3": "",
   "taxation_id3": "",
   "credit_period": 2,
   "credit_limit": 1000,
   "resellerCode": "CODE"
}
```
  </TabItem>
  <TabItem value="ResponseJSON" label="Response JSON">
      ```jsx title="JSON"
{
    "httpStatus": 200,
    "success": true,
    "error": {},
    "sync": true,
    "jobId": "c50p44b1-72ed-4d5b-92c6-30af092fc0e1",
    "jobStatusCode": 1,
    "cached": false,
    "replayed": false,
    "result": {
        "id": "API-E001",
        "email": "usersample@gmail.com"
    }
}
```
</TabItem>
</Tabs>