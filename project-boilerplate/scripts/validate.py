#!/usr/bin/env python

processName = 'js-auth-refresh'

import subprocess
import json
import time

time.sleep(3)

# get status list in JSON from PM2
pipes = subprocess.Popen(['/home/ubuntu/npm/bin/pm2', 'jlist'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
result, err = pipes.communicate()

if pipes.returncode != 0:
  err_msg = "%s. Code: %s" % (err.strip(), pipes.returncode)
  raise Exception(err_msg)

jsonData = json.loads(result)

for process in jsonData:
  if process['name'] != processName:
    continue
  if process['pm2_env']['status'] != 'online':
    raise ValueError('Process is offline')
  if process['pm2_env']['unstable_restarts'] != 0:
    raise ValueError('Process have unstable_restarts')
