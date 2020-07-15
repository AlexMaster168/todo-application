import { Task } from "./Task";
import {oneIndexCell, twoIndexCell, threeIndexCell, fourIndexCell} from './constants/constCellIndex'

export class LocalStorageItem extends Task{
    constructor(){
        super('.category__item')
        this.ONE_CELL = this.getArrayItems('ONE_CELL')
        this.TWO_CELL = this.getArrayItems('TWO_CELL')
        this.THREE_CELL = this.getArrayItems('THREE_CELL')
        this.FOUR_CELL = this.getArrayItems('FOUR_CELL')
    }
    
    getArrayItems(cell = ''){
        let localItems = localStorage.getItem(cell) ? 
        JSON.parse(localStorage.getItem(cell)) :
        []
        return localItems
    }

    addItemsFromLocalStore(arr = [], index){
        arr.map(item => {
            this.category[index].insertAdjacentHTML('beforeend', item)
        })
    }
    
    pasteItemsFromLocalStore(){
        let type = +this.select.value

        switch(type){
            case 1: 
                this.addItemsFromLocalStore(this.ONE_CELL, oneIndexCell)
                break
            case 2:
                this.addItemsFromLocalStore(this.TWO_CELL, twoIndexCell)
                break
            case 3:
                this.addItemsFromLocalStore(this.THREE_CELL, threeIndexCell)
                break
            case 4:
                this.addItemsFromLocalStore(this.FOUR_CELL, fourIndexCell)
                break
            
        }
    }
    
}