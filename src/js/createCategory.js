const categorysRowOne = [
    {id: 1, text: 'Важно и срочно'},    
    {id: 2, text: 'Важно, но не срочно'},    
]

const categorysRowTwo = [
    {id: 3, text: 'Не важно, но срочно'},    
    {id: 4, text: 'Не важно и не срочно'},    
]

const createHTML = category => {
    let html = `<div data-type="${category.id}" class="category__item">
                    <h3 class="category__title">
                        ${category.text}
                    </h3>
                </div>`
    return html
}

export function render(){
    const [cat1, cat2] = document.querySelectorAll('.category')
    const HTML1 = categorysRowOne.map(createHTML).join('')
    const HTML2 = categorysRowTwo.map(createHTML).join('')
    cat1.innerHTML = HTML1
    cat2.innerHTML = HTML2
}

