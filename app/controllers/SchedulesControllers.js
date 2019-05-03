const express = require('express'),
router = express.Router(),
models = require('../models'),
bodyParser = require('bodyParser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

//create
router.post('/', function (req, res) {
    models.Schedule.create(req.body).then(
        shedule => res.status(200).send(shedule)
    ).catch(err => res.status(500).send("Impossível criar, erro ", err))
})

//get all
router.get('/', function (req, res) {
    models.Schedule.findAll(req.body).then(
        shedule => res.status(200).send(shedule)
    ).catch(err => res.status(500).send("Dados não encontrado, erro ",err))
})

module.exports = router
