---
sidebar_position: 2
---
# Linking Domains to Apiculus CloudConsole

The Apiculus-powered cloud will have nameservers if the service provider has enabled this Service. These name servers are simply fully-qualified domain names (FQDN) for the servers that will store all the domain/zone information. Typically, these name servers will be in the following format:

```
ns1.<cloud-url>  
ns2.<cloud-url>  
ns3.<cloud-url>
```


There are 2 main steps involved in linking your owned domains to Apiculus DNS.

1. Navigate to **Networking > DNS Management** and using the **+ NEW ZONE** button, 'tell' CloudConsole what domain you'd like to use. On Apiculus, each domain name is stored as a _Zone_ file. _**Note** - Apiculus supports pricing per DNS Zone, which could be monthly or a one-time cost, depending on how the cloud service provider has priced the Service._ Once the Zone file has been created, navigate into the Zone from the list of available DNS Zones and into the **Nameservers** section where you'll find the nameserver information.
2. In a different tab or browser window, open the control panel of your domain name provider (e.g., Bigrock, GoDaddy, Dreamhost, etc.) and go to the section where DNS records are managed on the control panel. Typically, there will be a dedicated section for nameservers that can be edited. Find that section and edit the nameserver details to update them with the values from DNS Management on Apiculus CloudConsole.

![Linking Domains to Apiculus CloudConsole](img/LinkingDomainstoApiculusCloudConsole.png)

Once the nameservers have been propagated (which takes around 5-10 minutes), you'll be able to find your updated nameserver information if you whois your domain name. This also implicitly establishes your ownership of the domain.