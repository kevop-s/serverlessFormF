#!/bin/bash

if [ -z "${REACT_APP_BACK_URL}" ]; then
    echo "[Serverless $(date)] REACT_APP_BACK_URL not found"
    exit 1
fi

npm start