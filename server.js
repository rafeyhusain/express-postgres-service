const express = require('express');
const helmet = require('helmet');

// Uncomment for SWAGGER. See README
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./src/swagger.json');

const router = require('./src/api');

const app = express();

app.get('/', (request, response) => {
  response.status(200).send("OK")
});

app.use(express.json());
app.use(helmet());

app.use(router);

// Uncomment for SWAGGER. See README
// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

let server;
module.exports = {
  start(port) {
    server = app.listen(port, () => {
      console.log(`App started at http://localhost:${port}`);
    });
    return app;
  },
  stop() {
    server.close();
  }
};
