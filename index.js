var express = require('express');
var app = express();
var ShedulesControllers = require("./app/controllers/SchedulesControllers")

// app.get('/', function (req, res) {
//     res.send("Hello world!")
// });

app.use("/shedules", ShedulesControllers)

app.listen(3000, function () {
    console.log("Ouvindo na porta 3000")
});




