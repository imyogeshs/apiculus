---
sidebar_position: 2
---
# Role-based Access on Admin Console

Apiculus admin console offers role-based access control (RBAC) for all admin users. The system ships with default roles, with rights and privileges as outlined in this article.

## Admin Roles

The Apiculus system ships with the following default admin roles:

- Admin
- Accounts & Orders (AOM)
- Product
- Marketing
- Service
- Finance
- User (read-only)

:::note
To create new roles or modify any of the existing ones, a ticket may be raised to IndiQus Support. The ability to manage roles on the admin console UI is under development._
:::

## RBAC Details

The system follows the RBAC blueprint as below:

||Admin|AOM|Product|Marketing|Service|Finance|User|
|---|---|---|---|---|---|---|---|
|Dashboard|   |   |   |   |   |   |   |
|Utilisation widgets|Y|N|N|N|Y|N|Y|
|Commercial widgets|Y|N|Y|Y|N|Y|Y|
|Accounts|   |   |   |   |   |   |   |
|List of accounts|RW|RW|R|R|R|R|R|
|New account creation|RW|RW|N|N|N|N|N|
|Account details|RW|RW|N|N|R|R|R|
|Account actions|All|Partial|N|N|Partial|Partial|N|
|Accounts dashboard|Y|Y|N|N|N|N|Y|
|Account management|RW|RW|R|R|R|R|R|
|Account reports|Y|N|N|N|N|Y|Y|
|Billing & Financial|   |   |   |   |   |   |   |
|Finance dashboard|Y|N|N|N|N|Y|Y|
|Subscriptions|RW|N|N|N|N|RW|R|
|Invoices|RW|N|N|N|N|RW|R|
|Credit note||||||||
|Statements|RW|N|N|N|N|RW|R|
|Transactions|RW|N|N|N|N|RW|R|
|Unbilled|RW|N|N|N|N|RW|R|
|Billing & invoice settings|RW|N|N|N|N|RW|N|
|Billing reports|Y|N|N|N|N|Y|Y|
|Support & Operations|   |   |   |   |   |   |   |
|Utilisation dashboard|Y|N|N|N|Y|N|Y|
|Tickets|Y|Y|N|Y|Y|N|Y|
|Logs|Y|N|N|N|Y|N|Y|
|Service reports|Y|Y|N|Y|Y|N|Y|
|Services|   |   |   |   |   |   |   |
|Commercial dashboard|Y|N|Y|Y|N|N|Y|
|Plan management|RW|R|RW|R|N|N|R|
|Catalogue management|RW|R|RW|R|N|N|R|
|List of plans|RW|R|RW|R|R|R|R|
|New plan creation|RW|N|RW|N|N|N|N|
|Plan details|RW|R|RW|R|R|R|R|
|Plan actions|All|N|RW|N|N|N|N|
|List of catalogues|RW|R|RW|R|R|R|R|
|New catalogue creation|RW|N|RW|N|N|N|N|
|Catalogue details|RW|R|RW|R|R|R|R|
|Catalogue actions|All|N|RW|N|N|N|N|
|Marketplace reports|Y|N|Y|Y|N|N|Y|
|Marketing|   |   |   |   |   |   |   |
|Marketing dashboard|Y|Y|Y|Y|N|N|Y|
|Promotions|RW|R|R|RW|N|N|R|
|Trials|RW|R|R|RW|N|N|R|
|List of promos|RW|R|R|RW|R|R|R|
|New promo creation|RW|N|N|RW|N|N|N|
|Promo actions|RW|N|N|RW|N|N|N|
|Branding & preferences|RW|N|N|RW|N|N|N|
|Marketing reports|Y|Y|Y|Y|N|N|R|
|Administration|   |   |   |   |   |   |   |
|Admin creation|RW|N|N|N|N|N|N|
|Platform settings|RW|N|N|N|N|N|N|
|Configurations|RW|N|N|N|N|N|N|
|Admin reports|Y|N|N|N|N|N|N|
|SP profile|RW|R|R|RW|R|R|R|
|Admin management|RW|R|R|R|R|R|R|
|Content management|RW|R|R|RW|R|R|R|
|Asset management|RW|R|R|RW|R|R|R|
|Invoice settings|RW|R|R|R|R|RW|R|
|Custom help links|RW|R|R|RW|R|R|R|
|Logs|   |   |   |   |   |   |   |
|All logs|R|R|R|R|R|R|R|
|Reports|   |   |   |   |   |   |   |
|All reports|R|R|R|R|R|R|R|

Y = Yes / Visible  
N = No / Not visible  
R = Read / Option visible but in disabled state  
RW = Read & Write / Option visible and can take action  
Partial = Limited access available  

:::note
the above blueprint only applies to the **Admin Console** and not to any other **ISV consoles** .
:::