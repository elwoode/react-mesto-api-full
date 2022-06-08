const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
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

const { PORT = 3000 } = process.env;
const app = express();
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});
app.use(express.json());

app.use(requestLogger);
app.post('/signup', validationCreateUser, createUser);
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
app.listen(PORT, () => {
  console.log(`Запуск сервера ${PORT}`);
});
