#!/bin/sh

URL=/front
cd $URL && npx tailwindcss -i ./src/index.css -o ./public/output.css --watch