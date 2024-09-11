---
sidebar_position: 2
---
# Creating and Updating Subscriber Accounts

## Creating New Subscriber Accounts

New subscriber accounts can be created by clicking the **+ New Account** button above the accounts listing.

General account creation flow is:
`Draft > Awaiting Confirmation > Active > Pending Profile Completion`

:::note
Admins can create accounts from the admin console regardless of the [signup mode](/docs/GettingStarted/SignupConfigurations/SignupSettings) specified under platform configurations.
:::

### Managing self-signups

Self-signups are accounts that are created without admin intervention of any kind. The Apiculus system automates sending of the email verification code and only the subscriber needs to perform any required action. Until the subscriber verifies their email, self-signup accounts will be visible under the **Awaiting Confirmation** section of account management. Admins can resend the verification email to these accounts.
:::note
Self-signup accounts are treated as 'retail' accounts, are created with **R** in their account IDs and take all the configurations and rules applied for self-signup accounts.  
:::

### Managing admin-assisted and admin-initiated signups

The only difference between admin-assisted and admin-initiated signups is that if admin-assisted the active [signup mode](/docs/GettingStarted/SignupConfigurations/SignupSettings), a form will be displayed to the subscriber who is signing up, which will land into the account management **Drafts** queue as a semi-filled up form. Admin-initiated signups, on the other hand, need to be started from scratch from the account management section.

:::note
Admin-assisted and admin-initiated accounts are treated as 'enterprise' accounts, are created with **E** in their account IDs and take all the configurations and rules applied for admin-assisted accounts.
:::

## Creating Accounts Using the Apiculus Accounts API

Susbcriber accounts can be created using the Apiculus Accounts API. These accounts bypass all verification steps and can be used to create subscriber accounts programmatically.

:::note
Accounts created using the API are treated as 'enterprise' accounts, are created with **E** in their account IDs and take all the configurations and rules applied for admin-assisted accounts.  
:::
## Updating Accounts

Account information can be updated and other available actions performed by going into the target subscriber account on the Apiculus admin console.