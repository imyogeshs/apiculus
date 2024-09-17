---
sidebar_position: 3
---
# Adding Instances to a VFI-based Network

Instances can be created and placed in the L2-LAN (called Free Networks) created by the Virtual Firewall. These Instances use special Linux OS images, which will be available as a separate OS Collection. Users can go to the usual Instance creation workflow and choose the appropriate options/controls to create an Instance in the Virtual Firewall network. The following steps need to create the Linux instance under the particular L2-LAN network.

- Enter the name of the Instance
- Choose your Availability Zone (In the screenshot, AZ2 Delhi VPC is selected)
- Select a Network (Free Networks)
- Automatically, the L2 LAN tier will be chosen based on the network selected (adc-E10_L2_LAN-Tier1)
- Select the OS Image (In the screenshot, PFSENSE LINUX 2 is selected)
- Choose a Compute pack
- Choose the Root Disk pack
- Check the summary and estimated costs for both Hourly and Monthly 
- Click on buy Hourly or Monthly as per your requirement and then click on confirm on the confirmation popover.

Once the Instance has been created, it can be managed in the same way as [Linux Instances](/docs/Subscribers/Compute/LinuxInstances/AboutLinuxInstances).

:::note
In its current scope, VFI-based networks only support a single VLAN/subnet and only special Linux Instances can be added to them.
:::