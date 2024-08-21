const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRoutes');
const path = require('node:path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log('Running...'));