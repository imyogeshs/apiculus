---
sidebar_position: 2
---
# Connecting to a Linux Instance

You can connect to Linux Instances via SSH sessions using passwords (less secure) or [SSH key pairs](https://docs.apiculus.com/hc/en-in/articles/13277634015133) (most secure).

## Connect from a Windows Machine

To connect to your Linux Instance from a Windows machine, you will need to use a small application called PuTTy, an SSH client.

1. [Download and install PuTTy.](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
2. Launch PuTTy on your computer.
3. You now need to enter your Instance’s IP address in the Hostname field.
4. You need to navigate to the Auth sub-category under Connection from the side menu (Connection —> SSH —> Auth)
5. Next step is to click the Browse button and select the private key file you that you had already generated.
6. Click Open at the bottom of the screen to open a connection to the Instance. PuttY asks you to allow the connection to the host.
7. Click OK to confirm and the terminal window will be displayed.
8.  Then enter the default root user name (typically _**ubuntu**_ for Ubuntu images and _**root**_ for all other Linux OS images) and press Enter to authenticate against the server with your SSH key.

You are now connected to your Instance.

## Connect from a macOS or Linux Machine

1. Open any terminal program.
2. Enter the command below into the terminal. Make sure you replace _your_private_key_ with the filename of your private key; _your_instance_ip_ with the IP address of your Instance; and _username_ with the default root user name (typically _**ubuntu**_ for Ubuntu images and _**root**_ for all other Linux OS images).

	```
	ssh -i ~/.ssh/**your_private_key** **username**@**your_instance_ip**
	```

3. If/when prompted, allow connection to the host by typing **_yes_**, then press **Enter**.

```
The authenticity of host 'myhost.ext (212.47.206.34)' can't be established.  
RSA key fingerprint is 4f:ba:65:cf:14:64:a7:1e:b6:07:7c:00:71:95:21:fa.
Are you sure you want to continue connecting (yes/no)?

You are now connected to your Instance.
```