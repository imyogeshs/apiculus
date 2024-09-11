---
sidebar_position: 4
---
# End-to-end Support Using OTRS

[OTRS Community Edition](https://otrs.com/otrs-software-solutions/otrs/otrs-community-edition/) is an ITIL-compliant open-source ticketing system. Along with basic ticket management, OTRS offers highly flexible workflow management capabilities, including and not limited to managing customer organisations, queues, custom SLAs, reports and also configuring and automating processes.

Apiculus integrates with OTRS in the following ways:

1. OTRS is deployed along with the Apiculus solution and can be accessed via a unique URL (typically, `otrs.<cloud-url>` ).
2. [Service provider agents get their dedicated accounts on OTRS](/docs/AboutServiceProviderAdministration/OTRSTicketingandServiceInterface).
3. All customer/subscriber accounts created on Apiculus get created on OTRS as customer organisations.
4. Tickets created on Apiculus get created on OTRS.
5. Agent replies are relayed to the customer via Apiculus CloudConsole, and customer replies are relayed to the agent on OTRS.

:::note
Apiculus supports OTRS Community Edition versions 5 and 6.
:::

Refer to the [official documentation to learn more about how to use OTRS](https://doc.otrs.com/doc/).