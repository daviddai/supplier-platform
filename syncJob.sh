#!/usr/bin/env bash

build_express_server="./build/express";
build_express_public="./build/express/public";
server_js="./src/main/javascript/build/server/server.js";
client_js="./src/main/javascript/build/client/client.js";

# sync express renderer service
if test -f "$server_js"; then
    cp ${server_js} ${build_express_server}
    cp ${client_js} ${build_express_public}
    echo "Done"
else
    echo "server.js does not exist"
fi