---
sidebar_position: 8
---
# Changing Resource Limits for Subscribers

Subscriber accounts are created with global default resource limits that are defined on the Apache CloudStack orchestrator. Resource limits can be applied for subscriber accounts by navigating into the target account and going into the **Limits** sub-section. These limits are different for every cloud region that's configured to deliver services from.

The following resource limits can be changed:

- Virtual machines (count)
- Volumes (count)
- Virtual routers (count)
- Snapshots (count)
- Templates (count)
- vCPU cores (count)
- RAM (MB/GB)
- Primary storage (MB/GB)
- Secondary storage (MB/GB)

:::note
Limits and QoS policies for non-CloudStack services (such as object storage, bare metal etc.) need to be configured on the connected ISV portal.
:::