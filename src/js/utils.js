export function getDefaultTaskElemts(){
    let defaultElem = ['.task', '.task__name', '.task__list', '.task__dateSet', '.task__timeSet']
    return defaultElem
}

export function getCreatedDate(){
    let date = new Date()

    let dd = date.getDate()
    dd = dd < 10 ? ('0' + dd) : dd

    let mm = date.getMonth() + 1
    mm = mm < 10 ? ('0' + mm) : mm

    let dateToday = `${dd}.${mm}.${date.getFullYear()}`
    return dateToday
}

export function lastElem(arr){
    return arr[arr.length - 1]
}