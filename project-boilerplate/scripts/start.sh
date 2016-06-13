#!/usr/bin/env bash

# use full path to pm2
shopt -s expand_aliases
alias pm=/home/ubuntu/npm/bin/pm2

# get env vars
source /home/ubuntu/.profile

# we must be in the app dir
cd /opt/xdotai/js-auth-refresh

# start or restart
pm startOrGracefulReload pm.json

# save PM2 processes
pm save
