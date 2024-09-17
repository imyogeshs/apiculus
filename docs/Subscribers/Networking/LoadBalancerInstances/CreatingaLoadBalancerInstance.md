---
sidebar_position: 2
---
# Creating a Load Balancer Instance

Load Balancer Instances can be created inside a VPC by following these simple steps:

1. Navigate to **Networking > Virtual Private Clouds** and go into that VPC in which the LBI needs to be placed. If unavailable, [create a new VPC](/docs/Subscribers/Networking/VirtualPrivateClouds/CreateListandViewVPCs).
2. In the VPC, [create a subnet/tier](/docs/Subscribers/Networking/VirtualPrivateClouds/CreatingVPCSubnetsTiers) with any desired configuration(s).
3. [Add an additional IPv4 Address](/docs/Subscribers/Networking/VirtualPrivateClouds/IPv4AddressesandVPC) to the VPC and keep it 'unused'.
4. Navigate to **Networking > Load Balancer Instances** and click on the **+ NEW LOAD BALANCER INSTANCE** button to access the LBI creation options.
5. In the 'Select VPC and Tier' section, specify the VPC and subnet as created/desired in steps 1 and 2 above. Choose any configurations as required for the rest of the options.
6. Once the LBI is created, navigate back to the VPC and [configure the added IPv4 Address as a _Static NAT_](/docs/Subscribers/Networking/VirtualPrivateClouds/IPv4AddressesandVPC) on the newly-created Load Balancer Instance.

:::note
The above steps will create an LBI and place it in the correct spot in the network. To configure traffic management rules and access other options via the NetScaler VPX control panel, additional activation steps are needed. These instructions are sent over email when an LBI is created.
:::