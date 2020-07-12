import '../styles/main.scss'
import {ValidatorName, ValidatorDate} from './validation'
import {Task} from './Task'


const nameValidator = new ValidatorName('.invalid-name')
const dateValidator = new ValidatorDate('.invalid-date')
const taskCreator = new Task('.category__item')

document.addEventListener('DOMContentLoaded', () => {
    nameValidator.chekingInput()
    dateValidator.chekingInput()
})

document.addEventListener('submit', (event) => {
    event.preventDefault()
    nameValidator.giveErr()
    dateValidator.giveErr()
    if(nameValidator.taskName.value.trim() !== '' && dateValidator.date.value !== ''){
        taskCreator.addTask()
        nameValidator.taskName.value = ''
        dateValidator.date.value = ''
        dateValidator.time.value = ''
        taskCreator.select.value = 1
        
    }
})








