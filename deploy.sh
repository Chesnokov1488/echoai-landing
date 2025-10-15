#!/bin/bash

set -e

echo "🚀 Начинаем развертывание лендинга EchoAI..."

# Проверяем наличие Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен. Установите Docker и попробуйте снова."
    exit 1
fi

# Проверяем наличие Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose не установлен. Установите Docker Compose и попробуйте снова."
    exit 1
fi

# Создаем необходимые директории
echo "📁 Создаем необходимые директории..."
mkdir -p ./certbot/conf
mkdir -p ./certbot/www
mkdir -p ./dist

# Собираем и запускаем контейнеры
echo "🔨 Собираем и запускаем контейнеры..."
docker compose up --build -d

# Ждем запуска nginx
echo "⏳ Ждем запуска nginx..."
sleep 10

# Проверяем статус
echo "📊 Проверяем статус контейнеров..."
docker compose ps

echo "✅ Развертывание завершено!"
echo ""
echo "🌐 Ваш сайт доступен по адресам:"
echo "   HTTP:  http://product-echoai.ru"
echo "   HTTPS: https://product-echoai.ru"
echo ""
echo "📋 Для получения SSL сертификата выполните:"
echo "   ./init-letsencrypt.sh"
echo ""
echo "📝 Для просмотра логов:"
echo "   docker-compose logs -f"
