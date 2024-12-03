```bash
emcc -sMODULARIZE=1 -sEXPORT_NAME=lib --js-library=./src/lib.js -o ./out/lib.js ./src/lib.c
node ./index.js
```
