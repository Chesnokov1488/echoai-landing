#!/bin/bash

# Создаем необходимые директории
mkdir -p ./certbot/conf
mkdir -p ./certbot/www

# Получаем SSL сертификат
docker compose run --rm certbot certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email admin@product-echoai.ru \
  --agree-tos \
  --no-eff-email \
  -d product-echoai.ru \
  -d www.product-echoai.ru

# Перезапускаем nginx с SSL
docker compose restart nginx
