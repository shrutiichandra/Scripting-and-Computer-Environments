#!/bin/bash
pkill 4_3.sh
sudo sed -i '/nameserver 10.4.20.204/d' /etc/resolv.conf
echo "VPN Stopped"