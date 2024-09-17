---
sidebar_position: 0
---
# About Linux Instances

Instances are computing units that provide you with resources to run your applications/workloads. Linux Instances are virtual machines that run the images of Linux Operating Systems, for example, Ubuntu, CentOS, Rocky, Oracle, Debian, etc.

Before creating a Linux instance, it is important to plan the architecture, networking and access to the Linux Instances. As a thumb rule:

- You can use a ‘Basic/Flat’  (or EC, elastic compute) Linux Instance to get started quickly and set up your Linux Instances behind apiculus Cloud’s global server load balancer (GSLB) and control access by setting up virtual firewall rules; or;
- You can use a ‘tiered’ network (or Advanced VPC, virtual private cloud) Linux Instances to configure advanced networking and application architectures and control access by setting up access control lists.

Apiculus offers a highly usable and visual way of working with and operating Linux Instances using the CloudConsole. All Linux Instances available in your account can be accessed in the following way:

1. Navigate to **Compute > Linux Instances**.
2. All the Linux instances for your account will be listed here with the following details:
	1. Instance Name (Along with the configuration details)
	2. OS- Icon will be displayed.
	3. Default IP Address.
	4. Created

![Linux Instances](img/Linux.png)

Clicking on the instance name, you can view a list of sections and the various operations or actions you can perform by going inside the particular section. Below the Instance name, there is an informational view where you can find the below details

- Configuration
- Availability Zone
- Default IP
- Created 

On the top right corner, two quick options are available, one for accessing the Instance console and the other to POWER OFF/ON the Instance.

Details on available Linux Instance operations and actions can be found in their respective sections.

- [Overview](ViewingDetailsofLinuxInstances)
- [Graphs & Utilisation](ViewingGraphsandUtilizationofLinuxInstances)
- [Alerts](ConfiguringAlertsonLinuxInstances)
- [Volumes](VolumeManagementwithLinuxInstances)
- [Networking](NetworkingManagementwithLinuxInstances)
- [Snapshots](WorkingwithLinuxInstanceSnapshots)
- [Reconfigure](ReconfiguringLinuxInstances)
- [Operations](LinuxInstanceOperations)