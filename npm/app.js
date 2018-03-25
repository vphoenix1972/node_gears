// package.json is created by npm init
// express added with npm install express --save-dev
// Have fun!

'use strict';

// получаем модуль Express
const express = require("express");

// Main

// создаем приложение
var app = express();
 
// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response){
 
    response.end("Hello from Express!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);