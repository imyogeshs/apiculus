---
sidebar_position: 2
---
# System Requirements

## Software Version

The required version may vary depending on the HyperStore release. The recommended version is Cloudian HyperStore Version  7.4.1.

## Management VM Requirements

Cloudian HyperStore can be deployed as a software-defined storage solution on industry-standard x86 servers.

### Recommended Configuration

- 1 CPU, 8 cores 
- 64GB RAM
- 2 x 300GB SSD (for RAID-1 mirrored hosting of the OS as well as Cassandra and Redis databases storing system metadata) l 
- 12 x 4TB HDD (for ext4 file systems storing object data) (JBOD, no RAID)
- 2x10GbE Ports

### Minimum Requirement for Production Systems 

- 1 CPU, 8 cores 
- 32GB RAM 
- 2 x 160GB SSD (for RAID-1 mirrored hosting of the OS as well as Cassandra and Redis databases storing system metadata) 
- 12 x 2TB HDD (for ext4 file systems storing object data) (JBOD, no RAID)
- 1x1GbE Port

### Operating System Requirements

To perform a fresh installation of HyperStore 7.4.1, you must have an RHEL 7. x or CentOS 7. x Linux operating system on each host.

## HyperStore License

A software license is required to use Cloudian HyperStore. You should contact Cloudian or their authorised partners to discuss licensing options, pricing, and any specific requirements related to software licensing. Apiculus doesn’t ship with a Cloudian HyperStore license.

## Hardware BoQ

The hardware Bill of Quantity (BoQ) will depend on expected data capacity, performance requirements, and desired redundancy levels. Cloudian provides hardware guidelines and recommendations for deploying HyperStore, including information on server specifications, disk configurations, networking, and power requirements. Consulting the official documentation or contacting Cloudian or their authorized partners will help determine the appropriate hardware BoQ for your specific needs.