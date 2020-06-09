const express = require('express');

const Tarefa = require('../models/Tarefa')

module.exports = {
    async create (request, response){
        const { tarefa } = request.body;
        try {
            teste = await Tarefa.create({
                tarefa,
            });
            return response.status(202).send({ok: 'Requisição bem sucedida'});
        } catch (err){
            return response.status(400).send({error: 'Não foi possivel cadastrar nova tarefa'});
        }
    },

    async index(request, response){
        try{
            const tarefas = await Tarefa.find();
            return response.json(tarefas);
        } catch (err){
            return response.status(400).send({ error: 'Erro ao carregar tarefas'})
        }
    },

    async destroy (request, response){
        const idTarefa = request.params.id;
        try{
            const verificarTarefa = await Tarefa.findOne({ _id: idTarefa });
            if(!verificarTarefa)
                return response.status(400).send({ erro: 'Tarefa não encontrada'});
            await Tarefa.deleteOne({ _id: idTarefa });
            return response.status(200).send({ ok: "Requisição bem sucedida"})
        } catch(err){
            return response.status(400).send({ error: 'Não foi possivel deletar.'});
        }
    }
}