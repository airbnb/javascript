#!/bin/bash

case "$1" in

"qa")
	echo "creating data qa script in utils"
	SOURCE=./data_qa
	DESTINATION=~/xdotai/utils/db/
	;;
*) echo "Template not defined for $1"
	;;
esac

cp -r $SOURCE $DESTINATION