const express = require('express');
const userController = require('./controllers/userController');
const transferController = require('./controllers/transferController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const app = express();
app.use(express.json());

// User routes
app.post('/api/register', userController.register);
app.post('/api/login', userController.login);
app.get('/api/users', userController.getAll);

// Transfer routes
app.post('/api/transfer', transferController.transferFunds);
app.get('/api/transfer/:userId', transferController.getTransferHistory);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
