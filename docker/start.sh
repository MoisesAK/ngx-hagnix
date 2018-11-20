#!/bin/sh

sed -i -e "s|%BASE_URL%|${BASE_URL}|g" /usr/share/nginx/html/index.html

exec nginx -g 'daemon off;'
