import React, {useState,useEffect } from 'react';
import './Tarefas.css';
import api from '../../api';

export default function Tarefas() {

    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);

    async function adicionarTarefa(e){ 
        e.preventDefault();
        try{
            const response = await api.post('/tarefas', {
                tarefa
            });
            setTarefa('');
            setTarefas([...tarefas, response.data])
        } catch(error){
            console.log(error);
        }
    };

    async function excluirTarefa(e, idTarefa){
        e.preventDefault();
        await api.delete(`/tarefas/${idTarefa}`)
        .then((response) => {
            console.log('Membro excluido com sucesso.')
        }).catch((err) => {
            console.log(err);
        });
    }

    async function carregarTarefa(){
        const response = await api.get('/tarefas');

        setTarefas(response.data);
    }

    useEffect(() => {
        carregarTarefa();
    }, [adicionarTarefa, excluirTarefa]);


  return (
    <>
    <div id="tarefas">
        <div className="adicionar-tarefa">
            <input type="text" name="tarefa" placeholder="Escreva a tarefa aqui..." value={tarefa} onChange={ e => setTarefa(e.target.value)}></input>
            <button className="adicionar" type="submit" onClick={e => {
                adicionarTarefa(e);
            }}
            >
                Adicionar tarefa</button>
        </div>

        <div className="bloco-notas">
            <div className="box"> 
                <div className="part-tarefa"> 
                    {tarefas.map(tarefa => (
                        <li key={tarefa.id}><a>{tarefa.tarefa}</a>
                    <button 
                        className="excluir" 
                        onClick={ e => {
                        excluirTarefa(e, tarefa._id)}}
                        >
                            Excluir tarefa</button>
                        </li> 
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
    </>
  );
}