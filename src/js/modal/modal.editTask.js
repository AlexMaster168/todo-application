import { getIndex, changeTask } from "../utils"
import { onePriority, twoPriority, threePriority, fourPriority } from "../constants/constPriority"

export class Modal{
    constructor(rename, redate, retime){
        this.rename = document.querySelector(rename)
        this.redate = document.querySelector(redate)
        this.retime = document.querySelector(retime)
        this.modal = document.querySelector('.window')
        this.modalBody = document.querySelector('.window__body')
        this.closed = document.querySelector('.window__close')
        this.done = document.querySelector('.window__done')
        this.taskOptions = []
        this.valid()
        this.open()
        this.close()
        this.getTaskOptions()
        this.editTask()
    }

    valid(){
        this.done.disabled = true
        const valid = [this.rename, this.redate, this.retime]
        valid.forEach(input => {
            input.addEventListener('input', () => {
                if(valid[0].value.trim() && valid[1].value !== '' || valid[2].value !== ''){
                    this.done.style.opacity = 1
                    this.done.disabled = false
                } else {
                    this.done.style.opacity = 0.6
                    this.done.disabled = true
                }
            })
        })
    }

    open(){
        document.addEventListener('click', event => {
            this.valid()
            if(event.target.hasAttribute('data-btn-edit')){
                this.modal.style.display = 'flex'
                this.modalBody.classList.add('window__animation')
            }
        })
    }

    close(){
        this.closed.addEventListener('click', () => {
            this.modal.style.display = 'none'
            this.modalBody.classList.remove('window__animation')
            this.rename.value = ''
            this.redate.value = ''
            this.retime.value = ''
        })
    }

    getTaskOptions(){
        document.addEventListener('click', event => {
            if(event.target.hasAttribute('data-btn-edit')){
                const reminder = document.getElementById(`${event.target.dataset.id}`)
                const taskName = reminder.querySelector('.reminder__name')
                const taskDate = reminder.querySelector('.reminder__date')
                const taskTime = reminder.querySelector('.reminder__time')
                const index = {
                    one: getIndex(onePriority),
                    two: getIndex(twoPriority),
                    three: getIndex(threePriority),
                    four: getIndex(fourPriority)
                }
                this.taskOptions = [taskName, taskDate, taskTime, index, reminder]
                return this.taskOptions
            }
        })
    }

    editTask(){
        this.done.addEventListener('click', () => {
            const [taskName, taskDate, taskTime, index, reminder] = this.taskOptions
            taskName.innerHTML = this.rename.value
            taskDate.innerHTML = this.redate.value.split('-').reverse().join('.')
            if(this.retime){
                taskTime.innerHTML = this.retime.value
            }
            changeTask(index, 'one', reminder, onePriority, 'ONE_CELL')
            changeTask(index, 'two', reminder, twoPriority, 'TWO_CELL')
            changeTask(index, 'three', reminder, threePriority, 'THREE_CELL')
            changeTask(index, 'four', reminder, fourPriority, 'FOUR_CELL')
            this.closed.click()
            this.taskOptions = []
        })
    }
}
