import {Router} from 'express'

import PersonController from '../controllers/PersonController.js';

const routes = Router();

routes.get('/', PersonController.index);

routes.get('/person/:id', PersonController.indexPerson);

routes.post('/person', PersonController.create);

routes.patch('/person/:id', PersonController.update);

routes.delete('/person/:id', PersonController.delete);


export default routes;

