---
sidebar_position: 7
---
# Ingress Networking on Kubernetes Clusters

This **Networking** section under cluster details helps manage a cluster's firewalls and ingress networking. Port forwarding and load balancing rules can also be managed using kubectl.

![Ingress Networking on Kubernetes Clusters](img/Ingress1.png)

:::note
Apiculus Kubernetes Service supports traefik and nginx ingress controllers.
:::

## Adding a Firewall Rule to Cluster

A firewall restricts incoming and outgoing network traffic to enhance the security of Kubernetes clusters. It prevents unauthorised access to the cluster's components and resources.

- _Click the_ **_ADD NETWORKING RULE_** _button, and a popover will open._
- _Select_ **_Firewall_** _from the list of networking options and then specify the following options._
    - _Super CIDR (CIDR notation typically consists of an IP address followed by a slash ("/") and a number indicating the number of significant bits in the subnet mask. For example, "192.168.1.0/24" represents a subnet with an IP range from 192.168.1.0 to 192.168.1.255)_
    - _Choose a Protocol from the available options, i.e., TCP, UDP & ICMP_
    - _Enter the Start Port_
    - _Enter the End Port_ 
    - _Click on **ADD FIREWALL RULE**_

![Ingress Networking on Kubernetes Clusters](img/Ingress2.png)

## Adding a Port Forwarding Rule to Cluster

Port forwarding allows external traffic to access specific services running within Kubernetes pods, enabling external communication with applications.

- _Click the_ **_ADD NETWORKING RULE_** _button, and a popover will open._
- _Select_ **_Port Forwarding_** _from the list of networking options and then specify the following options._
    - _Select the particular node from the list_
    - _Choose a Protocol from the available options, i.e., TCP, UDP._
    - _Enter the Public Start and End Port_
    - _Enter the Private Start and End Port_
    - _Click on **ADD PORT FORWARDING RULE**_

![Ingress Networking on Kubernetes Clusters](img/Ingress3.png)

## Adding a Load Balancing Rule to Cluster

Cluster load balancing rules distribute incoming network traffic across multiple Kubernetes pods to ensure high availability, fault tolerance, and optimal resource utilisation.

- _Click the_ **_ADD NETWORKING RULE_** _button, and a popover will open._
- _Select_ **_Load Balancing_** _from the list of networking options and then specify the following options._
    - _Specify the name of the rule._
    - _Choose a Protocol from the available options, i.e., TCP proxy, TCP, and UDP. (The protocol determines how the traffic is transmitted)_
    - _Enter the Public Port._
    - _Enter the Private Port._
    - _Select the algorithm._
    - _Click on **ADD LOAD BALANCING RULE**_

![Ingress Networking on Kubernetes Clusters](img/Ingress4.png)