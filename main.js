const boardContainer = document.getElementById("boardContainer")

// return a div that is a child of boardcontainer
// and has classname cell
let cell = {
    x: this.x,
    y: this.y
}


let board = {
    cells: {
        x: cell.x,
        y: cell.y,
    }
}

function createDiv(posX, posY, parent) {
    let div = document.createElement('div')
    div.classList.add('cell')
    div.classList.add(`X=${posX}`)
    div.classList.add(`Y=${posY}`)
    parent.appendChild(div)
    cell.x = posX
    cell.y = posY
    board.cells += cell

}

for (let j = 10; j >= 0; j--) {
    for (let i = 0; i < 11; i++) {
        createDiv(i, j, boardContainer)
        console.log(`making div`)
    }
}

console.log(JSON.stringify(board.x), JSON.stringify(board.y))
