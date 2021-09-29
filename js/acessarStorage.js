import { renderTarefa } from "./renderizarTarefa.js"
export function acessarDados(){ 
    const lista = document.querySelector('[data-lista]')
    lista.innerHTML = ""
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    
    tarefaCadastradas.forEach((tarefas,id)=>{
        lista.appendChild(renderTarefa(tarefas,id))
    })
}
// renderizar a partir dos dados do local storage
