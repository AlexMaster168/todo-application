export class Preloader {
    constructor(preloader){
        this.preloader = document.querySelector(preloader)
        this.hiddenPreloader()
    }

    hiddenPreloader(){
        setTimeout(() => {
            this.preloader.style.display = 'none'
        }, 1200)
    }
}