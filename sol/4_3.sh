#!/bin/bash

read -p "Username: " u
read -p "Password: "p

wget --user $u --password $p "https://vpn.iiit.ac.in/secure/ubuntu.ovpn"
sudo apt install openvpn
sudo -b openvpn --config $PWD/ubuntu.ovpn

sudo sed -i '1i nameserver 10.4.20.204' /etc/resolv.conf

echo "VPN started"
