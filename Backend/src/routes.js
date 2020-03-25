const express = require("express");
const routes = express.Router();
const OngControler = require("./Controlers/OngControler");
const incidentsControler = require("./Controlers/IncidentControler");
const ProfileControler = require("./Controlers/ProfileControler");
const SessionControler = require("./Controlers/SessionControler");

routes.get('/ongs', OngControler.index);

routes.post('/ongs', OngControler.create);

routes.get('/incidents', incidentsControler.index);
routes.post('/incidents', incidentsControler.create);
routes.delete('/incidents/:id', incidentsControler.delete);

routes.get('/profile', ProfileControler.index);
routes.post('/session', SessionControler.create);


module.exports = routes;