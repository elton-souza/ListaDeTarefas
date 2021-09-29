import { acessarDados } from "./acessarStorage.js"
import criarTarefa from "./criarTarefa.js"
import filtrarTarefas from "./filtrarTarefa.js"

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa)

acessarDados()
filtrarTarefas()