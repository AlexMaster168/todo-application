import {ToDo} from './ToDo'
import {getDefaultTaskElemts, getCreatedDate} from './utils'

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

    addTask(){
        let type = +this.select.value

            switch(type){
                case 1:
                    this.category[0].insertAdjacentHTML('beforeend', this.toHTML)
                    break
                case 2:
                    this.category[1].insertAdjacentHTML('beforeend', this.toHTML)
                    localStorage.setItem('todo1', this.toHTML)
                    break
                case 3:
                    this.category[2].insertAdjacentHTML('beforeend', this.toHTML)
                    localStorage.setItem('todo2', this.toHTML)
                    break
                case 4:
                    this.category[3].insertAdjacentHTML('beforeend', this.toHTML)
                    localStorage.setItem('todo3', this.toHTML)
                    break
                default:
                    return ''
            }

    }
}