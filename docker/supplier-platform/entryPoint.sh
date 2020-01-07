#!/bin/bash

java -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=4084 -jar /vol/development/supplier-platform-1.0-SNAPSHOT.jar