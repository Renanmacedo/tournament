#!/bin/bash 
echo "Run script"


case $1 in
 dev)
  echo "Starting dev..."
  concurrently --kill-others --names "N,R" -c "bgGreen.bold,bgBlue.bold" "npm run server" "npm run webpack"
 ;;
 server)
   export DEBUG=tournament:*
   export PORT=3001
   export NODE_PATH=server/
   npm run build-server
   nodemon ./server/bin/www $ENV
 ;;
 build)
  export NODE_ENV=production
  rm -rf dist/
  npm run build-client
  npm run build-server
  ;;
 build-server)
  npx tsc --project ./server/tsconfig.server.json
 ;;
 build-client)
  npx webpack --mode=production
 ;;
 *)
    echo "comand not found"
 ;;
esac