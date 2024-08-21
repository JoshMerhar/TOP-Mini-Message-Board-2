const express = require('express');

const indexRouter = express.Router();

const messages = [
    {
        text: 'Greetings and salutations',
        user: 'Armando',
        added: new Date(),
        id: 0
    },
    {
        text: 'Hi, planet.',
        user: 'aUser',
        added: new Date(),
        id: 1
    },
];

indexRouter.use(express.urlencoded({ extended: true }));

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages: messages });
});

indexRouter.get('/new', (req, res) => {
    res.render('form');
});

indexRouter.post('/new', (req, res) => {
    const username = req.body.username;
    const message = req.body.message;
    messages.push({
        text: message,
        user: username,
        added: new Date(),
        id: messages.length
    });
    res.redirect('/');
});

indexRouter.get('/messages/:id', (req ,res) => {
    res.render('message', { message: messages[req.params.id] });
});

module.exports = indexRouter;