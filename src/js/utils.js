
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

export function getArrayItems(cell = ''){
    return JSON.parse(localStorage.getItem(cell)) || []
} 

export function deleteArrayItem(arr, cell = ''){
    arr.map((item, i) => {
        if(item.includes(`${event.target.dataset.id}`)){
            arr.splice(i, 1)
            localStorage.setItem(cell, JSON.stringify(arr))
        }
    })
}

export function hiddenItemText(array, index){
    return array[index].style.display = 'none'
}

export function showItemText(array, index){
    return array[index].style.display = 'block'
}

export function chekingArrayLength(arrPrioritys, arrItemsTexts, itemsTextsIndex){
    if(arrPrioritys.length > 0){
        hiddenItemText(arrItemsTexts, itemsTextsIndex)
    } else showItemText(arrItemsTexts, itemsTextsIndex)
}
