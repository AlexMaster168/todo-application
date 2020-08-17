import {ToDo} from './ToDo'
import {getDefaultTaskElemts, completeTaskItem, getCreatedDate, lastElem, deleteArrayItem, hiddenItemText, showItemText, chekingArrayLength} from './utils'
import {onePriority, twoPriority, threePriority, fourPriority} from './constants/constPriority'
import {oneIndexCell, twoIndexCell, threeIndexCell, fourIndexCell} from './constants/constCellIndex'


export class Task extends ToDo{
    constructor(categorySelector){
        super(...getDefaultTaskElemts())
        this.category = document.querySelectorAll(categorySelector)
        this.itemsTexts = document.querySelectorAll('.category__complitly') || []
    }

    getDateCreating(){
        let date = this.date.value
        let innerDate = date.split('-').reverse().join('.')
        return innerDate
    }

    getTimeCreating(){
        let time
        if(this.time.value !== '' || this.time.value !== null){
            time = this.time.value
            return time
        } else {
            return ''
        }
    }

    getNameCreating(){
        let name
        if(this.taskName.value){
            name = this.taskName.value
            return name
        }
        return name
    }

    getId(){
        let id = 'i' + new Date().getSeconds()*111
        return id
    }

    get toHTML(){
        return `
        <div id="${this.getId()}" class="reminder reminder_indent">
            <div class="reminder__datetime">
                <p class="reminder__date">
                    ${this.getDateCreating()}
                </p>
                <p class="reminder__time">
                    ${this.getTimeCreating()}
                </p>
            </div>
            <div class="reminder__notify reminder__notify_indent">
                <button data-btn-complete="true" id="${this.getId()}" class="reminder__btn"></button>
                <p class="reminder__name">
                    ${this.getNameCreating()}
                </p>
                <p class="reminder__dateCreated">
                    <i>
                        Дата создания: ${getCreatedDate()}
                    </i>
                </p>
                <button data-id="${this.getId()}" data-btn-edit="true" title="Изменить" class="reminder__edit"></button>
                <button data-id="${this.getId()}" data-btn-destroy="true" title="Удалить" class="reminder__destroy">&#10006;</button>
            </div>
        </div>
        `
    }

    addItemsFromArray(array, index){
        array.push(this.toHTML)
        this.category[index].insertAdjacentHTML('beforeend', lastElem(array))
    }

    addItemToLocalStore(cell, arrayPriority){
        localStorage.setItem(cell, JSON.stringify(arrayPriority))
    }

    addTask(){
        let type = +this.select.value

            switch(type){
                case 1:
                    hiddenItemText(this.itemsTexts, 0)
                    this.addItemsFromArray(onePriority, oneIndexCell)
                    this.addItemToLocalStore('ONE_CELL', onePriority)
                    break
                case 2:
                    hiddenItemText(this.itemsTexts, 1)
                    this.addItemsFromArray(twoPriority, twoIndexCell)
                    this.addItemToLocalStore('TWO_CELL', twoPriority)
                    break
                case 3:
                    hiddenItemText(this.itemsTexts, 2)
                    this.addItemsFromArray(threePriority, threeIndexCell)
                    this.addItemToLocalStore('THREE_CELL', threePriority)
                    break
                case 4:
                    hiddenItemText(this.itemsTexts, 3)
                    this.addItemsFromArray(fourPriority, fourIndexCell)
                    this.addItemToLocalStore('FOUR_CELL', fourPriority)
                    break
                default:
                    return ''
            }

    }

    deleteTask(){
        document.addEventListener('click', (event) =>{
            if(event.target.hasAttribute('data-btn-destroy')){
                let item = document.getElementById(`${event.target.dataset.id}`)
                item.parentNode.removeChild(item)
                deleteArrayItem(onePriority, 'ONE_CELL')
                deleteArrayItem(twoPriority, 'TWO_CELL')
                deleteArrayItem(threePriority, 'THREE_CELL')
                deleteArrayItem(fourPriority, 'FOUR_CELL')
            }
        })
    }

    completeTask(){
        document.addEventListener('click', (event) => {
            if(event.target.hasAttribute('data-btn-complete')){
                const button = event.target
                button.classList.toggle('reminder__btn-complete')
                let item = document.getElementById(`${event.target.id}`)
                item.classList.toggle('reminder-complete')
                const taskName = button.nextElementSibling
                taskName.classList.toggle('reminder__name-complete')
            }
        })
    }

    textItemComplitly(){
        const itemsTexts = document.querySelectorAll('.category__complitly') || []
    
        chekingArrayLength(onePriority, itemsTexts, 0)
        chekingArrayLength(twoPriority, itemsTexts, 1)
        chekingArrayLength(threePriority, itemsTexts, 2)
        chekingArrayLength(fourPriority, itemsTexts, 3)
    }


}

