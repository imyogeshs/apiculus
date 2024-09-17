---
sidebar_position: 3
---
# Activating the NetScaler VPX Control Panel

The steps mentioned below can be used for activating the NetScaler VPX control panel and accessing it after activation.

1. Navigate to **Networking > Load Balancer Instances** and click on the LBI whose control panel needs to be activated.
2. In the LBI details, click on the **Console** button to access the Instance's console interface. One-by-one, use the following commands:

```
set ns config -IPAddress <VM_private_IP_address> -netmask <VM_tier_netmask>
add route 0 0 <gateway_IP_address_for_tier>
save config
reboot
```


:::note
All the required details can be found in the parent VPC and/or on the LBI details sections of Apiculus CloudConsole.
:::

Once the above steps are completed, the NetScaler VPX UI can be accessed by using the **LAUNCH LOAD BALANCER MANAGEMENT INTERFACE** button in the **Access** section of LBI details.