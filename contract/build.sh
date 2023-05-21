#!/bin/sh

echo ">> Building contract"

near-sdk-js build src/contract.ts  build/hello_near.wasm
near-sdk-js build src/assets.ts  build/assets_near.wasm 
near-sdk-js build src/escrow.ts  build/escrow_near.wasm 