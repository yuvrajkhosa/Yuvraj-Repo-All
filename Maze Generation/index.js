let cells = [];
let stack = [];
let colsRows = 100;
let sizeOfCell;
let current = 0;
let isDone = false;

function setup() {
    createCanvas(1700, 800);
    frameRate(250);
    sizeOfCell = (width / colsRows);
    for (let i = 0; i < (colsRows * colsRows); i++) {
        cells.push(new Cell(i));
    }
    cells[current].isVisited = true;

    while (!isDone) {
        let neighbors = cells[current].getNeighbors();
        if (neighbors.length > 0) {
            let random = Math.floor(Math.random() * neighbors.length);
            //Remove Wall

            Cell.removeWall(cells[current], neighbors[random]);
            stack.push(current);

            neighbors[random].isVisited = true;

            current = neighbors[random].pos;
        } else if (stack.length > 0) {
            current = stack.pop();
        } else {
            isDone = true;
        }
    }

}

function draw() {
    background(92, 50, 168);
    stroke(255);
    for (cell of cells) { //Draw the Cells
        // if(cell.isVisited){
        //     cell.show();
        // }

        if (cell.walls[0]) { //Only drawing Top wall and Right wall since all cell beside each other
            line(cell.x * sizeOfCell, cell.y * sizeOfCell, cell.x * sizeOfCell + sizeOfCell, cell.y * sizeOfCell);
        }
        if (cell.walls[1]) {
            line(cell.x * sizeOfCell, cell.y * sizeOfCell, cell.x * sizeOfCell, cell.y * sizeOfCell + sizeOfCell);
        }
    }

}