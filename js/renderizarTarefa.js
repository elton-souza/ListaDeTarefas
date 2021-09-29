import { getData } from "./acessarStorage.js"
import botaoConlcuir from './deletarTarefa.js'
import botaoDeletar from './concluirTarefa.js'

export function renderTarefa({valor,validar},id){
    const tarefa = document.createElement('li')
    const div = document.createElement('div')
    const conteudo = `<p>${valor}</p>`

    if(validar){
        tarefa.classList.add('tarefa-finalizada')   
    }
    tarefa.classList.add('tarefa')
    tarefa.innerHTML = conteudo

    div.appendChild(botaoDeletar(getData, id))
    div.appendChild(botaoConlcuir(getData,id))

    tarefa.appendChild(div)

    return tarefa
}
