import '../styles/main.scss'
import {ValidatorName, ValidatorDate} from './validation'
import {Task} from './Task'
import {render} from './createCategory';
import {LocalStorageItem} from './getItems'
import {onePriority, twoPriority, threePriority, fourPriority} from './constants/constPriority'


render() //Render category items

const localStoreItem = new LocalStorageItem(onePriority, twoPriority, threePriority, fourPriority)
const nameValidator = new ValidatorName('.invalid-name')
const dateValidator = new ValidatorDate('.invalid-date')
const taskCreator = new Task('.category__item')

document.addEventListener('DOMContentLoaded', () => {
    nameValidator.chekingInput()
    dateValidator.chekingInput()
    localStoreItem.pasteItemsFromLocalStore()
    taskCreator.deleteTask()
})


document.addEventListener('submit', (event) => {
    event.preventDefault()
    nameValidator.giveErr()
    dateValidator.giveErr()
    if(nameValidator.taskName.value.trim() && dateValidator.date.value !== ''){
        taskCreator.addTask()
        nameValidator.taskName.value = ''
        dateValidator.date.value = ''
        dateValidator.time.value = ''
        taskCreator.select.value = 1
    }
})














