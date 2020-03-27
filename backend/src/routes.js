const express = require('express');

const OngController = require('./controllers/OngController'); 
const IncidentController = require('./controllers/IncidentController'); 
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionController');

const routes = express.Router();


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informaçã no back-end 
 * POST:  Criar uma informação para o back-end
 * PUT: Alterar uma informação para o back-end
 * DELETE: Apagar uma informação do back-end
 */

/**
 *  Tipos de parâmetros:
 * 
 *  Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 *  Route Params: Parâmetros utilizados para identificar recursos
 *  Request Body: Cordo da requisição, utilizado para criar ou alterar recursos
 */

routes.post('/sessions', SessionsController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;