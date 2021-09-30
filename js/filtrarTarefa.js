import { renderTarefa } from "./renderizarTarefa.js"
export default function filtrarTarefas(){
    const lista = document.querySelector('[data-lista]')
    lista.innerHTML = ""
    const opcoes = document.querySelector('[data-opcoes]')
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas.forEach((tarefa,id)=>{
        switch(opcoes.value){
            case 'geral':
                lista.appendChild(renderTarefa(tarefa,id))
                break
            case 'pendente':
                if(tarefa.validar === false){
                    lista.appendChild(renderTarefa(tarefa,id))
                }
                break
            case 'concluida':
                if(tarefa.validar === true){
                    lista.appendChild(renderTarefa(tarefa,id))
                }
                break
        }
    })
} 