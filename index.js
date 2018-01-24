/*

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/script.js', function(req, res) {
    res.sendFile(__dirname + '/public/script.js');
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + '/public/style.css');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

io.on('connection', function(socket) {
    socket.on('art', function(save) {
        io.emit('art', save);
    });
    socket.on('text', function(text) {
        console.log('user disconnected222');
        io.emit('text', text);
    });
});

http.listen('3000', function() {
    console.log('listening on 3000');
});
*/
/*
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('art', function(save) {
        io.emit('art', save);
    });
    socket.on('message', function(text) {
        io.emit('message', text);
    });
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});*/
