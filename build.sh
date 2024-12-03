#!/usr/bin/env bash

rm -rf ./out
mkdir -p ./out
emcc -sMODULARIZE=1 -sEXPORT_NAME=lib --js-library=./src/lib.js -o ./out/lib.js ./src/lib.c
