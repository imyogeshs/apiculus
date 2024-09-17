---
sidebar_position: 4
---
# Scaling Kubernetes Clusters

Apiculus CloudConsole allows for manual and automatic cluster scaling. Clusters scaling can be configured from the **Nodes** section of cluster details or from the **Operations** section of cluster details.
## Manually Scaling a Cluster

1. Under **Nodes** (or under **Operations**), click on **SCALE CLUSTER**, and a pop tab will appear; keep 'autoscaling' disabled.
2. Select one of the available compute packs.
3. Click on **CONFIRM SCALING**.

![Scaling Kubernetes Clusters](img/ScalingKubernetes1.png)

![Scaling Kubernetes Clusters](img/ScalingKubernetes2.png)

## Automatically Scaling a Cluster

1. Under **Nodes** (or under **Operations**), click on **SCALE CLUSTER**, and a popover will appear, enable 'autoscaling' by flipping the switch.
2. Enter the minimum and maximum number of worker nodes.
3. Click on **CONFIRM SCALING**.

![Scaling Kubernetes Clusters](img/ScalingKubernetes3.png)