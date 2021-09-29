import {getData} from './acessarStorage.js'

export default function criarTarefa(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))|| []
    const input = document.querySelector('[data-form-tarefa]')
    const valor = input.value
    const validar = false

    const dados = {
        valor, validar
    }
    
    if(valor == ""){
        alert('Digite uma tarefa')
    }else{ 
        const tarefasAtualizadas = [...tarefas, dados]
        localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
    }

    input.value = ""

    getData()
}
