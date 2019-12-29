const express = require('express');
const app = express();
const http = require('http').createServer(app);
const indexRoter = require('./routes/index');
const path = require('path');
const io = require('socket.io')(http);
const router = express.Router();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
  res.render('index', {
    title: 'Socket IO Chatting',
  });
});
http.listen('3000', () => console.log('Sunucu ayakta!'));
