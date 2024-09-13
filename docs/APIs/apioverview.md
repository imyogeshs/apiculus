---
sidebar_position: 1
---

# API Overview

Apiculus supports (basic) account and access management using REST API. The details are as follow:

```jsx
API endpoint URL: https://<api_url>

E.g., <https://api.mycloud.url>
```

<div className="custom-block-peach">
Supported methods: **`GET`, `POST`, `PUT`**
</div>


:::note
The fully qualified domain name (FQDN) for the API endpoint will be shared separately.
:::
|Inclusions|Exclusions|
|---|---|
|Create account|2FA login|
|Authenticate session|Update profile|
|Restrict account|KYC actions & information|
|Disable account|`RETAIL` account creation|
|Terminate account|-|
|Enable account|-|
|Close session|-|