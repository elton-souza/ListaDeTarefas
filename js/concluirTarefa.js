export default function botaoConlcuir(atualizarStorage,id){
    const botao1 = document.createElement('button')
    botao1.classList.add('botao-concluir')
    botao1.addEventListener('click', ()=>{
        finalizarTarefa(atualizarStorage,id)
        
    })
    return botao1
}
function finalizarTarefa(atualizarStorage,id){
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas[id].validar = !tarefasCadastradas[id].validar

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    atualizarStorage()
}