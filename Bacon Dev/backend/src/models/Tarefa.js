const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
    tarefa: { 
        type: String,
        maxlength: 100,
        minlength: 3,
        required: true
    }
});

module.exports = mongoose.model('Tarefa',TarefaSchema); 