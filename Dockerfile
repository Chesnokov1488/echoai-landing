# Используем Node.js 20 на Ubuntu для сборки (требуется для rolldown-vite)
FROM node:20-slim

# Устанавливаем системные зависимости
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости (включая dev для сборки)
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm ci

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Копируем собранные файлы в финальную директорию
RUN mkdir -p /app/build-output && \
    if [ -d "dist" ]; then \
        cp -r dist/* /app/build-output/; \
    fi
