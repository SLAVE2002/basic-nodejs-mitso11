const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const clientsRouter = require('./resources/clients/client.router');
const orderRouter = require('./resources/Orders/orders.router');
// const taskRouter = require('./resources/products/product.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/clients', clientsRouter);
app.use('/Orders', orderRouter);
// app.use('/Orders/:productsId/products', taskRouter);

module.exports = app;
