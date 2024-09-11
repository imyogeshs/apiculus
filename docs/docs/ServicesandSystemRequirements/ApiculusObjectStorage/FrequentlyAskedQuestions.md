---
sidebar_position: 4
---
# Frequently Asked Questions

### What is object storage in the context of Apiculus?

Object storage is a scalable and durable storage solution for managing unstructured data such as files, images, videos, and backups.

### How does object storage differ from block storage?

Unlike block storage, object storage stores data as objects with metadata, making it suitable for vast amounts of unstructured data.

### What are the typical use cases for object storage in the cloud?

Object storage is used for content distribution, backup and archiving, web applications, and more.

### How do I upload and manage objects in Apiculus object storage?

You can upload, manage, and organize objects using the Object Storage Menu available in your Apiculus account.

### How is data durability ensured in object storage?

Object storage employs data replication across multiple physical locations to ensure durability and availability.

### Are there features for versioning and data lifecycle management in object storage?

Yes, object storage provides versioning, data retention, and lifecycle policies for managing object data over time.

### What is the process for sharing objects stored in cloud object storage?

You can share objects by generating public URLs, setting appropriate permissions, or using signed URLs for temporary access. This can be done via the Cloudian HyperStore admin panel that you'll have access to once you create a Bucket.

### How is data retrieval latency managed in cloud object storage?

Object storage is optimised for high throughput and is well-suited for large-scale data retrieval.

### How does data access performance scale with AS3?

AS3 is designed for high scalability, making it suitable for applications with varying levels of data access.

### Is there a limit to the number of objects I can store in AS3?

No, AS3 is designed to handle very large numbers of objects. You will, however, be billed on usage.

### What is the performance impact of accessing data from different regions in object storage? 

Accessing data from geographically distant regions may result in increased latency and data transfer costs.

### Can I use object storage for media streaming and content delivery?

Object storage is commonly used for media streaming, distribution of content, and delivering static assets to users.

### Can I use S3 API with AS3?

Yes, AS3 comes with 100% S3 API compatibility.

### How will I be billed?

AS3 billing is usage-based and takes the following parameters:

- Storage used (/GB-hr)

- Data transfer IN (/GB-hr)

- Data transfer OUT (/GB-hr)

- HTTP Requests GET/HEAD (/request)

- HTTP Requests PUT/POST (/request)

- HTTP Requests DELETE (/request)

### Are fixed bucket and slab-based billing models available on AS3?

No, at this moment billing is completely usage-based and unitary.