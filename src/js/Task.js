import {ToDo} from './ToDo'
import {getDefaultTaskElemts, getCreatedDate, lastElem} from './utils'
import {onePriority, twoPriority, threePriority, fourPriority} from './constants/constPriority'
import {oneIndexCell, twoIndexCell, threeIndexCell, fourIndexCell} from './constants/constCellIndex'


export class Task extends ToDo{
    constructor(categorySelector){
        super(...getDefaultTaskElemts())
        this.category = document.querySelectorAll(categorySelector)
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

    get toHTML(){
        return `
        <div class="reminder reminder_indent">
            <div class="reminder__datetime">
                <p class="reminder__date">
                    ${this.getDateCreating()}
                </p>
                <p class="reminder__time">
                    ${this.getTimeCreating()}
                </p>
            </div>
            <div class="reminder__notify reminder__notify_indent">
                <button class="reminder__btn"></button>
                <p class="reminder__name">
                    ${this.getNameCreating()}
                </p>
                <p class="reminder__dateCreated">
                    <i>
                        Дата создания: ${getCreatedDate()}
                    </i>
                </p>
                <button title="Удалить" class="reminder__destroy">&#10006;</button>
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
                    this.addItemsFromArray(onePriority, oneIndexCell)
                    this.addItemToLocalStore('ONE_CELL', onePriority)
                    break
                case 2:
                    this.addItemsFromArray(twoPriority, twoIndexCell)
                    this.addItemToLocalStore('TWO_CELL', twoPriority)
                    break
                case 3:
                    this.addItemsFromArray(threePriority, threeIndexCell)
                    this.addItemToLocalStore('THREE_CELL', threePriority)
                    break
                case 4:
                    this.addItemsFromArray(fourPriority, fourIndexCell)
                    this.addItemToLocalStore('FOUR_CELL', fourPriority)
                    break
                default:
                    return ''
            }
    }
}