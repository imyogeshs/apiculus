---
sidebar_position: 4
---
# Using Block Volumes with Kubernetes

Apiculus Kubernetes (AK8s) also uses the underlying Block Volumes service to create persistent volumes for the Kubernetes clusters being created. Apiculus CloudConsole users can specify the root disk size for each cluster node (control and worker) and the Block Volume service will create the nodes in the cluster with a root disk of the specified size.

:::note
Volume management on cluster nodes is not currently supported on Apiculus CloudConsole.
:::