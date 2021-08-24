# Introduction

This is a payment sub-system. This system is supposed to check whether the given validated invoice can get a discount or not.

## Setup

- Install Docker

- Run `docker-compose up` in the root of the project.

### Database Setup

`npm run migrate up` will run the migrations.

`npm run migrate down` will roll back the migrations.

`npm run migrate:create <migration-name>`  will create a new migration file in [./src/migrations](./src/migrations).

To run the migrations inside of docker-compose. Which will run a bash instance inside the `app` container.

```sh
docker-compose run app bash
```

Followed by:
```sh
npm run migrate up
```


You can connect to Postgres using the psql client:

```sh
psql postgres://user:pass@localhost:35432/db
```


## Access URL

- To access api example for discount at category level:

```http://localhost:3000/product/2```

- To access api example for discount at product level:

```http://localhost:3000/product/3```

- To access adminer to view Postgres:

```http://localhost:8080```

System	:PostgreSQL<br/>
Server	:postgres<br/>
Username:user<br/>
Password:pass<br/>
Database:db<br/>

## Swagger API docs:

Uncomment lines in [./server.js](./server.js):

```js
// Uncomment for SWAGGER.
```

And run following commands:

```sh
npm i --save swagger-ui-express
npm run dev
```

Read swagger documentation and try out api at following URL:

```http://localhost:3000/api-docs```

## Project Structure & Useful Commands
- The default Docker `CMD` is `npm start`, [./docker-compose.yaml](./docker-compose.yaml) overrides this to `npm run dev` which runs the application using nodemon (auto-restart on file change).

- The Express API is located in [./src/api](./src/api).

- Applications routes for resources are defined in [./src/api/index.js](./src/api/index.js).

- Global concerns like security, cookie parsing, body parsing and request logging are handled in [./server.js](./server.js).

This application loosely follows the [Presentation Domain Data Layering](https://www.martinfowler.com/bliki/PresentationDomainDataLayering.html):

- Presentation is dealt with in the `./src/api` folder
- Domain is dealt with in the `./src/modules` folder. It's currently non-existent since we've only got generic user and session resources.
- Data is dealt with in the `./src/persistence` folder
