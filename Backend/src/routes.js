const express = require("express");
const {celebrate,Segments,Joi} = require("celebrate");
const routes = express.Router();
const OngControler = require("./Controlers/OngControler");
const incidentsControler = require("./Controlers/IncidentControler");
const ProfileControler = require("./Controlers/ProfileControler");
const SessionControler = require("./Controlers/SessionControler");

routes.get('/ongs', OngControler.index);

routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),

    })
}), OngControler.create);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page:Joi.number(),
     })
}) ,incidentsControler.index);
routes.post('/incidents', celebrate({
    [Segments.BODY]:Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value:Joi.number().required(),
    }),
})
    

,incidentsControler.create);


routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id: Joi.number().required(),
    })
    
}),incidentsControler.delete);

routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()}).unknown(),}) 
        ,ProfileControler.index);
routes.post('/session', SessionControler.create);


module.exports = routes;