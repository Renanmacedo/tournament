#!/bin/bash 
echo "Run script"


case $1 in
 dev)
  echo "Starting dev..."
  concurrently --kill-others --names "N,R" -c "bgGreen.bold,bgBlue.bold" "npm run server" "npm run webpack"
 ;;
 build)
  echo "Starting build..."
  export NODE_ENV=production
  npm run webpack
 ;;
 server)
   export NODE_PATH=server/
   export DEBUG=tournament:*
   export PORT=3001
   export NODE_PATH=server/
   nodemon ./server/bin/www $ENV
 ;;
 *)
    echo "comand not found"
 ;;
esac