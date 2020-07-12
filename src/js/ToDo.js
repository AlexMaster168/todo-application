export class ToDo{
    constructor(form, taskName, select, date, time){
        this.form = document.querySelector(form) || ''
        this.taskName = document.querySelector(taskName) || ''
        this.select = document.querySelector(select) || ''
        this.date = document.querySelector(date) || ''
        this.time = document.querySelector(time) || ''
    }
}



