const boardContainer = document.getElementById("boardContainer")

// return a div that is a child of boardcontainer
// and has classname cell


function createDiv(posX, posY, parent) {
    let div = document.createElement('div')
    div.classList.add('cell')
    div.classList.add(`X=${posX}`)
    div.classList.add(`Y=${posY}`)
    parent.appendChild(div)

}

for (let j = 10; j >= 0; j--) {
    for (let i = 0; i < 11; i++) {
        createDiv(i, j, boardContainer)
        console.log(`making div`)
    }
}
