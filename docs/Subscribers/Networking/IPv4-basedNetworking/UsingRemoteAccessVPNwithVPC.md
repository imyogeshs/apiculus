---
sidebar_position: 3
---
# Using Remote Access VPN with VPC

To use a VPN client to connect to your VPC, follow these steps:

1. Navigate to  **Networking > Virtual Private Clouds** from the main navigation panel and enter the VPC that you wish to connect to using your VPN client.
2. Inside the VPC, Click the **Manage VPN access** available under the **IPv4 ADDRESSES** section, then click on the **Remote Access (L2TP)**  option and enable the switch for the Remote Access VPN.
3. This will also enable the **Remote Access VPN** button for the VPC’s default IP. Click on the button to copy the pre-shared key (PSK) and the IP range from the dialog box to use in your VPN client.
4. Additionally, you’ll need to add VPN user credentials here.

To test this configuration, you can open the VPN client on your local system and try connecting to the VPC.