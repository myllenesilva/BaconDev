const { Router } = require('express');
const TarefaController = require('./controllers/TarefaController');

const routes = Router();

routes.get('/tarefas', TarefaController.index);
routes.post('/tarefas', TarefaController.create);
routes.delete('/tarefas/:id', TarefaController.destroy);

module.exports = routes; 