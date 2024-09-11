---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# listAccounts

:::tip **GET**
:::

Lists accounts and provides detailed account information for listed accounts.
## Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                                                                 |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| page                    | integer | Max length should not exceed 255.                                                                                                                                                                                                                                                           |
| name                    | string  | list account by account name. Max length should not exceed 255.                                                                                                                                                                                                                             |
| showicon                | boolean | flag to display the resource icon for accounts. Max length should not exceed 255.                                                                                                                                                                                                           |
| id                      | string  | list account by account ID. Max length should not exceed 255.                                                                                                                                                                                                                               |
| state                   | string  | list accounts by state. Valid states are enabled, disabled, and locked.. Max length should not exceed 255.                                                                                                                                                                                  |
| isrecursive             | boolean | defaults to false, but if true, lists all resources from the parent specified by the domainId till leaves.. Max length should not exceed 255.                                                                                                                                               |
| domainid                | string  | list only resources belonging to the domain specified. Max length should not exceed 255.                                                                                                                                                                                                    |
| accounttype             | integer | list accounts by account type. Valid account types are 1 (admin), 2 (domain-admin), and 0 (user).. Max length should not exceed 255.                                                                                                                                                        |
| listall                 | boolean | If set to false, list only resources belonging to the command's caller; if set to true - list resources that the caller is authorized to see. Default value is false. Resources dedicated to a project are listed only if using the projectid parameter.. Max length should not exceed 255. |
| details                 | list    | comma separated list of account details requested, value can be a list of (all, resource, min). Max length should not exceed 255.                                                                                                                                                           |
| iscleanuprequired       | boolean | list accounts by cleanuprequired attribute (values are true or false). Max length should not exceed 255.                                                                                                                                                                                    |
| pagesize                | integer | Max length should not exceed 255.                                                                                                                                                                                                                                                           |
| keyword                 | string  | List by keyword. Max length should not exceed 255.                                                                                                                                                                                                                                          |
| apiKey <br /> (required)    | string  |                                                                                                                                                                                                                                                                                             |
| secretKey (required) | string  | Note: Your secret key is confidential. It will not be transferred over the Internet and will not leave your browser.                                                                                                                                                                        |
## Response
<Tabs>
  <TabItem value="error" label="Error Code" default>
    200
  </TabItem>
  <TabItem value="responsecontenttype" label="Response content type">
    application/json
  </TabItem>
  <TabItem value="response" label="Response">
    ```[
  {
    "accounttype": 0,
    "networklimit": "string",
    "ipavailable": "string",
    "vpctotal": "Unknown Type: long",
    "secondarystorageavailable": "string",
    "projecttotal": "Unknown Type: long",
    "primarystorageavailable": "string",
    "jobid": "string",
    "user": {
      "isdefault": true,
      "lastname": "string",
      "rolename": "string",
      "timezone": "string",
      "is2famandated": true,
      "accountid": "string",
      "firstname": "string",
      "apikey": "string",
      "username": "string",
      "iscallerchilddomain": true,
      "icon": "Unknown Type: resourceiconresponse",
      "created": "Unknown Type: date",
      "roletype": "string",
      "email": "string",
      "roleid": "string",
      "state": "string",
      "is2faenabled": true,
      "account": "string",
      "domain": "string",
      "usersource": "string",
      "id": "string",
      "accounttype": 0,
      "domainid": "string",
      "secretkey": "string"
    },
    "vpcavailable": "string",
    "vmavailable": "string",
    "snapshotavailable": "string",
    "snapshotlimit": "string",
    "networkavailable": "string",
    "domain": "string",
    "iscleanuprequired": true,
    "vmlimit": "string",
    "created": "Unknown Type: date",
    "id": "string",
    "vmrunning": 0,
    "vpclimit": "string",
    "projectavailable": "string",
    "name": "string",
    "iplimit": "string",
    "accountdetails": "Unknown Type: map",
    "memorytotal": "Unknown Type: long",
    "cpuavailable": "string",
    "memoryavailable": "string",
    "volumetotal": "Unknown Type: long",
    "primarystoragetotal": "Unknown Type: long",
    "volumeavailable": "string",
    "vmstopped": 0,
    "networkdomain": "string",
    "projectlimit": "string",
    "volumelimit": "string",
    "networktotal": "Unknown Type: long",
    "snapshottotal": "Unknown Type: long",
    "isdefault": true,
    "iptotal": "Unknown Type: long",
    "state": "string",
    "cputotal": "Unknown Type: long",
    "groups": "Unknown Type: list",
    "domainpath": "string",
    "secondarystoragelimit": "string",
    "templatetotal": "Unknown Type: long",
    "templateavailable": "string",
    "defaultzoneid": "string",
    "vmtotal": "Unknown Type: long",
    "cpulimit": "string",
    "sentbytes": "Unknown Type: long",
    "icon": "Unknown Type: resourceiconresponse",
    "rolename": "string",
    "domainid": "string",
    "templatelimit": "string",
    "memorylimit": "string",
    "receivedbytes": "Unknown Type: long",
    "roletype": "string",
    "secondarystoragetotal": "Unknown Type: float",
    "jobstatus": 0,
    "primarystoragelimit": "string",
    "roleid": "string"
  }
]
```
  </TabItem>
</Tabs>