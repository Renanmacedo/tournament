#!/bin/bash 
echo "Run script"


case $1 in
 dev)
 
  echo "Starting dev..."
  rm -rf dist/
  npm-run-all   --parallel  "webpack" "server"
 ;;
 build)
  echo "Starting build..."
  export NODE_ENV=production
  npm run webpack
 ;;
 *)
    echo "comand not found"
 ;;
esac