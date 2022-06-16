require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('./middlewares/cors');
const helmet = require('helmet');
const { createUser, login } = require('./controllers/users');
const {
  validationCreateUser,
  validationLogin,
} = require('./middlewares/validations');
const auth = require('./middlewares/auth');
const handelError = require('./middlewares/handelError');
const NotFoundError = require('./errors/NotFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { userRouter } = require('./routes/users');
const { cardRouter } = require('./routes/cards');
const { createAccountLimiter, limiter } = require('./middlewares/limiter');
const { PORT = 3005 } = process.env;
const app = express();

app.use(express.json());
app.use(cors);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(requestLogger);
app.use(helmet());
app.post('/signup', createAccountLimiter, validationCreateUser, createUser);
app.use(limiter);
app.post('/signin', validationLogin, login);
app.use(auth);
app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.all('*', () => {
  throw new NotFoundError('Запрашиваемая страница не найдена');
});
app.use(errorLogger);
app.use(errors());
app.use(handelError);

mongoose.connect('mongodb://localhost:27017/mestodb', () => {
  console.log('Connection successful');
});

app.listen(PORT, () => {
  console.log(`Запуск сервера ${PORT}`);
});
