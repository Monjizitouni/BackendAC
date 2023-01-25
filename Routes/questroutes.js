const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const quest  = require('../Controllers/Questcontroller');



router.post('/jou', quest.ajouteTCHAP)
router.get('/showw/:key/:chap/:ssch', quest.recupererquestqt)
router.get('/showed/:key', quest.recupererquestqts)
router.get('/showrep/:key', quest.recupererquestrep)


module.exports= router