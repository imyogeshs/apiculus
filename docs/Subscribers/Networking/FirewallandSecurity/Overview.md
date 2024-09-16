---
sidebar_position: 1
---
# Overview

Apiculus supports the delivery and management of Virtual Firewall Instances (VFI) in an as-a-service model. VFI is essentially a Linux Instance pre-loaded with a firewall software which makes it work as a a virtual appliance. The Service falls under the ‘Firewalls and Security’ paradigm and is built using our integration framework using [pfSense](https://pfsense.org/) or [FortiGate VM](https://www.fortinet.com/products/private-cloud-security/fortigate-virtual-appliances) for powering the appliance.

CloudConsole users can use VFI as an alternative to VR-based VPC which allows users to achieve stronger security and firewalling capabilities. The VFI Service uses L2 networks, which can help in conserving IPv4 addresses.

Currently, VFI is an experimental Service on Apiculus and there are a few limitations to it:

1. A user can have only one VFI per Availability Zone;
2. VFI-based networks only support a single VLAN;
3. Only Instances with a special Linux OS can be added to VFI-based networks;
4. VFI needn't inherit Apiculus-level RBAC for users.

Apiculus offers the following features in its current scope:

- [Creating a Virtual Firewall Instance](https://docs.apiculus.com/hc/en-in/articles/13259517912349)
- [Creating a VFI-based network](https://docs.apiculus.com/hc/en-in/articles/13259617204765)
- [Activating and accessing the VFI control panel](https://docs.apiculus.com/hc/en-in/articles/13260379789981)
- [Viewing VFI network details](https://docs.apiculus.com/hc/en-in/articles/13260458464413)
- [Deleting a VFI network](https://docs.apiculus.com/hc/en-in/articles/13260585479069)

All VFI created in an account can be accessed from **Networking > Firewalls & Security** and navigating to the **Virtual Firewalls** tab.