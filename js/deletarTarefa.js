export default function botaoDeletar(atualizarStorage, id){
    const botao2 = document.createElement('button')
    botao2.classList.add('botao-deletar')   
    botao2.addEventListener('click', ()=>{
        deletarTarefa(atualizarStorage,id)
        
    })
    return botao2
}

function deletarTarefa(atualizarStorage,id){
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas.splice(index, 1)

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))

    atualizarStorage()
}
