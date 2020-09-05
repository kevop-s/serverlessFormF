#!/bin/bash
######################################
#                                    #
#        Serverless Form Front       #
#                                    #
######################################

SERVERLESSF_CONTAINER="serverles-front"
SERVERLESSF_PORT="3000"
SERVERLESSF_REACT_APP_BACK_URL="https://back-mail.kmmx.kevops.kyz"

docker run -itd --name $SERVERLESSF_CONTAINER \
    -p $SERVERLESSF_PORT:3000 \
    -v /etc/localtime:/etc/localtime:ro \
    -v /usr/share/zoneinfo:/usr/share/zoneinfo:ro \
    -e REACT_APP_BACK_URL=$SERVERLESSF_REACT_APP_BACK_URL \
    -e TZ=America/Mexico_City \
    serverlessformf