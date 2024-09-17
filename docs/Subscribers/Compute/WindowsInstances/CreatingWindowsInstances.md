---
sidebar_position: 2
---
# Creating Windows Instances

Before creating a Windows Instance, it is important to plan the architecture, networking and access to the Windows Instances. As a thumb rule:

- You can use a ‘Basic/Flat’ (or EC, elastic compute) Windows Instance to get started quickly and set up your Linux Instances behind Apiculus-powered cloud’s global server load balancer (GSLB) and control access by setting up virtual firewall rules; or;
- You can use a ‘tiered’ network (or Advanced VPC, virtual private cloud) Windows Instances to configure advanced networking and application architectures and control access by setting up access control lists.

## Creating a Windows Instance on a Basic/Flat/EC Network

To create a Windows instance on a basic/flat networking zone, follow the below steps:

1. Navigate to **Compute > Windows Instances**.
2. Click on the **+ NEW WINDOWS INSTANCE** from the top right.
3. Enter the name for your Windows instance by following the naming convention mentioned below in the helper text.
4. Choose an Availability Zone, which is the geographical region where your Instance will be deployed. The chosen option should be the Basic/Flat/EC-type networking zones from all available AZs.
5. Choose a security group from the available options. 
6. Choose an Image to run on your Instance. This can be an operating system or a custom image that is available under **MY IMAGES.**
7. Choose a compute pack from the available compute collections.
8. Choose a Root disk from the available Disk packs, or you can use the free size option to specify the Root Disk.
9. Verify the Estimated Cost of your Windows Instance based on the specifications you have chosen from the Summary and Estimated Costs Section ( Here, both Hourly and Monthly Prices summary will be displayed).
10. Click on the check box after going through the policies mentioned by your cloud service provider.
11. Clicking on the BUY HOURLY or BUY MONTHLY button, a confirmation pop-over will open up, and the price summary will be displayed along with the discount codes if you have any in your account. 
    - You can apply any of the discount codes listed by clicking on the **APPLY** button. 
    - You can also remove the applied discount code by clicking the **REMOVE** button. 
    - Clicking on the **CANCEL** button, this action will be canceled.
12. Click on the **CONFIRM** to create the Windows Instance.

:::note
This might take up to 5-8 minutes. You may use the CloudConsole during this time, but it is advised that you do not refresh the browser window.
:::

Once ready, you’ll be notified of this purchase on your email address on record. The newly created Windows Instances can be accessed from **COMPUTE >** **Windows Instances** on the main navigation panel.

![Creating Windows Instances](img/CreatingWindowsInstances1.png)

## Creating a Windows Instance on a Tiered/Advanced VPC Network

To create a Windows instance on an advanced VPC AZ, follow the below steps:

1. Navigate to **Compute > Windows** Instances
2. Click on the **+ NEW WINDOWS INSTANCE** from the top right.
3. Enter the name for your Windows instance by following the naming convention mentioned below in the helper text.
4. Choose an Availability Zone, which is the geographical region where your Instance will be deployed. The chosen option should be the **advanced VPC** from all available AZs.
5.  Select a VPC network from the **Select Network** Dropdown and select the appropriate tier listed in **Select a Network Tier**.
	:::note
	To add a Windows Instance to a VPC, you need to have a VPC configured with at least one tier.
	:::
1. Choose an Image to run on your Instance. This can be an operating system or a custom image that is available under **MY IMAGES.**
2. Choose a compute pack from the available compute collections.
3. Choose a Root disk from the available Disk packs, or you can use the free size option to specify the Root Disk.
4. Verify the Estimated Cost of your Windows Instance based on the specifications you have   chosen from the Summary and Estimated Costs Section (Here, both Hourly and Monthly Prices summary will be displayed)
5. Click on the check box after going through the policies mentioned by your cloud service provider.
6. Clicking on the BUY HOURLY or BUY MONTHLY button, a confirmation pop-over will open up, and the price summary will be displayed along with the discount codes if you have any in your account. 
    - You can apply any of the discount codes listed by clicking on the **APPLY** button. 
    - You can also remove the applied discount code by clicking the **REMOVE** button. 
    - Clicking on the **CANCEL** button, this action will be canceled.
7. Click on the **CONFIRM** to create the Windows Instance.

:::note 
This might take up to 5-8 minutes. You may use the CloudConsole during this time, but it is advised that you do not refresh the browser window.
:::

Once ready, you’ll be notified of this purchase on your email address on record. The newly created Windows Instances can be accessed from **Compute >** **Windows Instances** on the main navigation panel.

![Creating Windows Instances](img/CreatingWindowsInstances2.png)


![Creating Windows Instances](img/CreatingWindowsInstances3.png)