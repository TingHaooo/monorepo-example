#!/bin/bash -x
if [ "$1" == "production" ]; then
  yarn
  yarn build
else 
  yarn
fi