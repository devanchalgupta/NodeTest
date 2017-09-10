const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        errorMessage: 'Page not found',
        appName: 'Express App'
    });
});

app.get('/users', (req, res) => {
    var users = [
        {name: 'John', age: 24}, 
        {name: 'Michael', age: 30}, 
        {name: 'Tom', age: 15}
    ];
    res.status(200).send(users);
});

module.exports = {
    app
};

app.listen(3000);