#!/usr/bin/env bash

build_express_folder="./build/express";
express_folder="./src/main/javascript/build/server/server.js";

# sync express renderer service
if test -f "$express_folder"; then
    cp ${express_folder} ${build_express_folder}
    echo "server.js has been updated";
    echo "Now try to restart rendering server...";
    docker exec rendering-service /usr/rendering-service/rebootExpress.sh
    echo "Rendering server restarted";
else
    echo "server.js does not exist"
fi