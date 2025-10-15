# Развертывание лендинга EchoAI

## Предварительные требования

1. Docker и Docker Compose установлены на сервере
2. Домен `product-echoai.ru` настроен на IP `194.87.226.245`
3. Порты 80 и 443 открыты в файрволе

## Развертывание

### 1. Клонирование и подготовка

```bash
# Переходим в директорию проекта
cd /path/to/chesnokov-lending

# Создаем необходимые директории
mkdir -p ./certbot/conf
mkdir -p ./certbot/www
mkdir -p ./dist

# Делаем скрипт исполняемым
chmod +x init-letsencrypt.sh
```

### 2. Сборка и запуск

```bash
# Собираем и запускаем контейнеры
docker compose up --build -d

# Проверяем статус
docker compose ps
```

### 3. Получение SSL сертификата

```bash
# Запускаем скрипт для получения сертификата
./init-letsencrypt.sh
```

### 4. Проверка работы

- HTTP: http://product-echoai.ru (должен редиректить на HTTPS)
- HTTPS: https://product-echoai.ru

## Управление

### Остановка
```bash
docker compose down
```

### Перезапуск
```bash
docker compose restart
```

### Обновление приложения
```bash
# Останавливаем
docker compose down

# Пересобираем
docker compose build --no-cache

# Запускаем
docker compose up -d
```

### Просмотр логов
```bash
# Все сервисы
docker compose logs -f

# Только nginx
docker compose logs -f nginx

# Только certbot
docker compose logs -f certbot
```

## Структура файлов

```
chesnokov-lending/
├── docker-compose.yml          # Основной файл Docker Compose
├── nginx.conf                  # Конфигурация Nginx
├── init-letsencrypt.sh         # Скрипт получения SSL сертификата
├── certbot/                    # Директория для сертификатов
│   ├── conf/                   # Сертификаты Let's Encrypt
│   └── www/                    # Webroot для проверки домена
├── dist/                       # Собранное React приложение
└── echoai-landing/             # Исходный код
    ├── Dockerfile              # Dockerfile для сборки
    └── ...
```

## Автоматическое обновление сертификатов

Сертификаты Let's Encrypt автоматически обновляются каждые 12 часов через cron задачу в контейнере certbot.

## Мониторинг

Для мониторинга состояния сервисов можно использовать:

```bash
# Статус контейнеров
docker compose ps

# Использование ресурсов
docker stats

# Логи в реальном времени
docker compose logs -f
```
