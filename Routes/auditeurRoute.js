const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const Auditeur  = require('../Controllers/AuditeurController');



//router.post('/login', Client.login)
router.get('/showw', Auditeur.recupererclient)
router.post('/add', Auditeur.add)
router.get('/showh', Auditeur.recupererauditeur)
router.get('/show/:key', Auditeur.recupererphase)
router.delete('/dell/:id', Auditeur.deleteSAUDById);
router.put('/upaud/:id', Auditeur.updateAUD);
router.get('/searchaud/:id', Auditeur.searchAUD);
router.post('/login', Auditeur.login)



module.exports= router