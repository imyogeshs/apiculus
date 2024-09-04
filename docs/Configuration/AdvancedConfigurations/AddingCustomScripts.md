---
sidebar_position: 4
---
# Adding Custom Scripts

Apiculus supports adding custom `<script>` elements to the platform's HTML `<head>` components to execute during rendering of the platform UI on browsers. This can be useful in a number of cases:

- you want to integrate a clickstream, marketing or analytics tool without using Google Tag Manager due to cross-border restrictions (for example, some countries restrict moving data out to Google);
- you want to write a custom function or logic to affect how and what elements render on the web page; or,
- you don't want ad-blockers or privacy-focused browsers to flag external scripts (for example, Google Analytics, Tag Manager etc.) as ads.

Custom scripts can be added individually to Apiculus CloudConsole and to the admin console. To add a custom script, navigate to **Settings > Custom Scripts** from the user menu on the top right of the Apiculus admin console and paste the script in either of the text boxes as suitable.

:::note
The script should be wrapped between `<script>` and `</script>` tags.
:::

![Adding Custom Scripts](img/AddingCustomScripts.png)

:::warning 
This is an experimental feature and may end up breaking the platform UI if used incorrectly. **Use this feature with utmost caution**.
:::