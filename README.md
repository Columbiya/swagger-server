# Простенький сервер для сервинга доки сваггера

**Важно!!**

> > >

    openapi.json должен быть в корне проекта!!
    .env должен содержать APP_PORT=3001 (или любой другой порт, на который будет происходить переадресация)

> > >

## Чтобы развернуть на сервере нужно:

1. pm2
2. node

## Шаги для развертки

1. в корне проекта пишем `npm i`
2. `pm2 start "npm run start" --name YOUR_PROJECT_NAME`
3. `pm2 save`