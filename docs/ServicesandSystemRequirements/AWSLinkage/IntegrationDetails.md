---
sidebar_position: 3
---
# Integration Details

AWS Linkage is delivered as an integration with Amazon Web Services. The integration functions using API-driven checkpoints.

## Standard Integration Touchpoints
- **Account Creation**-  As end-users opt for the AWS Linkage, the user's AWS account is linked to the service provider's AWS Organisation account. This allows the service provider to raise invoices to the end-users.
- **Cataloguing** - This service will be part of the catalogue, i.e., the service provider configures from where to deliver the service and what price to deliver the service.
- **Account-level Billing -** All the usage generated on AWS will be available as an invoice on Apiculus, with the service provider as the biller.

## Specific Integration Touchpoints
- **Create EC2 Instances** - Users can create EC2 Instances in a 'quick create' mode using standard Amazon Machine Images (AMI) available to them in any of AWS' availability zones enabled for them on AWS.
- **Manage EC2 Instances** -  Users can add view details of their EC2 Instances, access their consoles, and manage the Instance's power states (start/stop/restart).
- **Manage Service on AWS** -  AWS account can be used and accessed from the AWS Console as usual. From Apiculus, a redirect is provided to the AWS Console.