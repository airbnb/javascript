#!/bin/bash

### usage: ./clone_template.sh qa my_qa_script

PROJECT_NAME=$2

if [ -z "$1" ] ; then
    echo 'Sorry! Please define a template'
    exit 1
fi

if [ -z "$2" ] ; then
    echo 'Sorry! Please define a project name'
    exit 1
fi

case "$1" in

"qa")
	if [ $# -eq 1 ]; then
		echo "No arguments supplied"
	fi
	SOURCE="./data_qa/*"
	DESTINATION="${HOME}/xdotai/utils/db/data_qa/${PROJECT_NAME}"
	;;

*) echo "Template not defined for $1"
	;;

esac

if [ -n "${SOURCE}" ]; then
	echo "Copying files from ${SOURCE} to ${DESTINATION}..."
	mkdir $DESTINATION
	cp -r $SOURCE $DESTINATION
	echo "Success!"
fi