
# freeSSL
This is a tutorial to get a free SSL certificate using certbot

# Prerequisites
 1. linux machine/server or windows WSL https://docs.microsoft.com/windows/wsl/about
 2. install certbot
 

    **sudo apt-get install certbot**

 
# Steps

 1. Execute the command below, and follow the instructions

```
sudo certbot certonly --manual
```

 2. When you arrives on acme-challenge download this project and change the acme-challenge file name and content.
 3. Send to your host that have a public IP
 4. And press enter
 
 
# Obs


 - This tutorial is ideal when you don't have access to the prompt of your host
 - If you are using a host like apache or nginx, just create a folder .well-known, on the root path of your website, and put the acme-challeng files inside.
 - Always use the fullchain hahaha
