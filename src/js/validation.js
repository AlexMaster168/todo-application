import {ToDo} from './ToDo'
import {getDefaultTaskElemts} from './utils'

export class Validation extends ToDo{
    constructor(){
        super(...getDefaultTaskElemts())
    }
}

export class ValidatorName extends Validation{
    constructor(errName){
        super()
        this.errName = document.querySelector(errName) || ''
    }

    giveErr(){
        let message = []

        if(this.taskName.value === '' || this.taskName.value === null || this.taskName.value.trim() === ''){
            message.push('Данное поле не может быть пустым!')
                this.taskName.style.border = '2px solid red'
            }

            if(message.length > 0){
                event.preventDefault()
                this.errName.textContent = message.join(' ')
            }
    }

    chekingInput(){
        this.taskName.addEventListener('input', () => {
            if(this.taskName.value !== '' || this.taskName.value !== null){
                this.taskName.style.border = '2px solid #3d0063'
                this.errName.textContent = ''
            }
        })
    }
}

export class ValidatorDate extends Validation{
    constructor(errDate){
        super()
        this.errDate = document.querySelector(errDate) || ''
    }

    giveErr(){
        event.preventDefault()
        let message = []

        if(this.date.value === '' || this.date.value === null){
            message.push('Укажите дату!')
            this.date.style.border = '2px solid red'
        }

        if(message.length > 0){
            event.preventDefault()
            this.errDate.textContent = message.join(' ')
        }
   }

   chekingInput(){
        this.date.addEventListener('input', () => {
            if(this.date.value !== '' || this.date.value !== null){
                this.date.style.border = '2px solid #3d0063'
                this.errDate.textContent = ''
            }
        })
    }

}


