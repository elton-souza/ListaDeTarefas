import { getData } from "./acessarStorage.js"
import criarTarefa from "./criarTarefa.js"

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa)

getData()
