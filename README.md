<h1>**Задание 1** (Exercise1)</h1>

<h2>user-service</h2> 

create user
![image](https://github.com/Raiver103/EffectiveMobile.Exercises/assets/80199038/be646a14-d295-414f-8007-7fe750dd2fd6)
update user
![image](https://github.com/Raiver103/EffectiveMobile.Exercises/assets/80199038/51fa2a4a-eee9-4e24-bc2a-9b3472abebe1)
get users
![image](https://github.com/Raiver103/EffectiveMobile.Exercises/assets/80199038/2d904848-94b6-4ba8-926d-6185fa5d6eba)

Technical tools
* Nest js
* PostgreSQL
* TypeORM

Installation

```bash
$ cd Exercise1
$ cd user-service
$ npm install
```

Running the app

```bash
$ cd Exercise1
$ cd user-service
$ node src/app.js
```

<h2>user-activity-service</h2>

![image](https://github.com/Raiver103/EffectiveMobile.Exercises/assets/80199038/7d44a304-7587-4883-bfab-488b738d36a5)

Technical tools
* Express js
* PostgreSQL
* TypeORM

Installation

```bash
$ cd Exercise1
$ cd user-activity-service
$ npm install
```

Running the app

```bash

$ cd Exercise1
$ cd user-activity-service

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

<h1>**Задание 2** (Exercise2)</h1>

<h2>user-service</h2>

![image](https://github.com/Raiver103/EffectiveMobile.Exercises/assets/80199038/6c4dd575-37e6-4b52-b4f4-71928c1c3bc4)

Technical tools
* Nest js
* PostgreSQL
* TypeORM

Installation

```bash
$ npm install
```

Running the app

```bash

$ cd Exercise2
$ cd user-service

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

<h1>Задания:</h1>
  
**Задание 1**  

Нужно реализовать 2 сервиса. Один сервис пользователей, другой сервис истории действий с пользователями. В сервисе пользователей должно быть 3 endpoint:

1. Создание пользователя
2. Изменение пользователя
3. Получение списка пользователей

В сервис “истории действий с пользователями” нужно отправлять события создания пользователя и изменения. 
Общение сервисов может происходить любым способом. 
Сервис “истории действий с пользователями” должен иметь ручку, которая отдаст историю действий с фильтрами по id пользователя и постраничной навигацией. 
Фреймворк также может быть любой. 
Один из сервисов должен быть на JS, для второго можно использовать TS. СУБД - postgresql

**Задание 2** 

Нужно написать сервис, который работает с пользователями. В бд может быть более 1 миллиона пользователей (набить данными бд нужно самостоятельно. Например, написать миграцию, которая это сделает). Каждый пользователь имеет поля:

- Имя
- Фамилия
- Возраст
- Пол
- проблемы: boolean // есть ли проблемы у пользователя

Нужно сделать endpoint, который проставить флаг проблемы у пользователей в false и посчитает, сколько пользователей имело true в этом флаге. Этот сервис нужно реализовать на nestjs
