---
sidebar_position: 4
---
# Switching to Another DNS Provider

In the event that you don't wish to use the DNS Management Service on your Apiculus-powered cloud, you can always switch back to another provider of choice. To do so, simply head to your domain name provider's control panel and update the nameserver details to those of the DNS provider you wish to use.

The following points, however, need to be considered:

1. There is no option to 'export' DNS records from one provider to another, which means that you'll need to recreate all your DNS records with the new provider;
2. If you simply switch nameservers, you'll still incur billing on your Apiculus-powered cloud unless you have deleted the DNS Zone file from the **Operations** section of the DNS Zone on Apiculus CloudConsole;
3. There might be a propagation delay while switching nameservers, which means it's always a good idea to let the nameservers propagate completely before deleting anything from Apiculus CloudConsole.