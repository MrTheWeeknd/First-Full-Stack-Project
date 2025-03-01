#!/bin/bash

DIR="ExpTS"
DB="game"
USER="game"
PASS="senha123"
PORT="4455"
ROUNDS="10"

cd $DIR
npm install

echo "PORT=$PORT" > .env
echo "ROUNDS=$ROUNDS" >> .env
echo "DATABASE_URL=mysql://$USER:$PASS@localhost:3306/$DB" >> .env

mysql -u$USER -p$PASS -e "DROP DATABASE $DB";
mysql -u$USER -p$PASS -e "CREATE DATABASE $DB";
npx prisma migrate dev
npm start
