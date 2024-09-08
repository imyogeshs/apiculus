---
sidebar_position: 7
---
# Logging In

Any user with a valid username/email and password can log in to Apiculus and will automatically be navigated to their respective control panel based on their user type.

Upon successful login, the navigation is as below:

- Subscriber users (admin and children) - to Apiculus CloudConsole
- Reseller users - to Apiculus admin console in the 'reseller' view
- Admin users - to Apiculus admin console

Apiculus stores certain essential and non-third party cookies that are needed for account identification. These are:

- Access token to authenticate session
- User information like ID, email, type, state and first/last name
- Other metadata like user's billing currency and payment currency

_Additionally, if Google Tag Manager is being used, the connected apps may inject their own cookies into the session. These will be treated as third party cookies and may be blocked by privacy-focused browsers, ad blockers etc._

:::note
Login attempts and passwords can be managed via setting up strong [password policies](/docs/Configuration/LoginConfigurations/ConfiguringPasswordPolicies) using platform configurations.
:::