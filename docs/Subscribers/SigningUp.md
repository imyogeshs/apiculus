---
sidebar_position: 3
---
# Signing Up

Apiculus offers an easy way of signing up for a subscriber cloud account. Clicking on the **Sign Up** link on [Access Central](/docs/Subscribers/AccessCentral) will navigate to the signup form. Users can simply fill up this form and follow the next steps to get access to their account.

## Self-service Signup

Self-service signups are completely automated and require no intervention from admins. These are only governed by configurations and rules defined under platform configurations, and take up default values from there. The flow of information is as below:

1. Subscriber clicks on **Sign Up** on Access Central and fills up the signup form.
2. A signup request is registered on the system and a verification email is sent to the subscriber; at this stage, the admin console will show this account as 'awaiting confirmation'.
3. Subscriber follows the instructions in the email and verifies their email.
4. Additionally, if mobile verification is enabled (SMS gateway required), the subscriber verifies their mobile phone details.
5. Upon successful verification, the subscriber sets their account password and logs in with their email and password combination.

## Admin-assisted Signup

Admin-assisted signups are semi-automated and require basic intervention from admins. These are governed by configurations and rules defined under platform configurations, and take up default values from there. Additionally, admins can manually add or edit information before publishing the account. The flow of information is as below:

1. Subscriber clicks on **Sign Up** on Access Central and fills up the signup form.
2. A signup request is registered on the system and a notification email is sent to the admin; at this stage, the admin console will show this account as 'draft'.
3. Admin users can log in to the admin console and verify the information (and add/edit, if needed) and proceed to publishing the account.
4. A verification email is sent to the subscriber; at this stage, the admin console will show this account as 'awaiting confirmation'.
5. Subscriber follows the instructions in the email and verifies their email.
6. Additionally, if mobile verification is enabled (SMS gateway required), the subscriber verifies their mobile phone details.
7. Upon successful verification, the subscriber sets their account password and logs in with their email and password combination.

## Admin-initiated Signup

Admin-initiated signups are manual and require the maximum intervention from admins. These are governed by configurations and rules defined under platform configurations, and take up default values from there. However, admins need to initiate the entire signup process from filling the form on behalf of the subscribers. The flow of information is as below:

1. If the admin-initiated mode is enabled, the **Sign Up** link will not be shown on Access Central.
2. Admin users can log in to the admin console and proceed to [create a new subscriber account](/docs/Administration/SubscribersandAccounts/CreatingandUpdatingSubscriberAccounts).
3. Once published, a verification email is sent to the subscriber; at this stage, the admin console will show this account as awaiting confirmation.
4. Subscriber follows the instructions in the email and verifies their email.
5. Additionally, if mobile verification is enabled (SMS gateway required), the subscriber verifies their mobile phone details.
6. Upon successful verification, the subscriber sets their account password and logs in with their email and password combination.

:::note
Only new subscriber accounts can be created using this process. Resellers, child admins and child subscribers can not be created this way and need to be invited from within their respective parent accounts.
:::