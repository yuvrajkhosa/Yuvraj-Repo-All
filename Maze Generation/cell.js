class Cell{
    constructor(pos){//X and Y will be row and column number
        this.pos = pos;
        this.x = pos % colsRows;
        this.y = Math.floor(pos / colsRows);
        this.isVisited = false;
        this.walls = [true, true];//Top, Right
    }

    getNeighbors(){
        let neighbors = [];
        neighbors.push(cells[getIndex(this.x, this.y - 1)]);
        neighbors.push(cells[getIndex(this.x + 1,  this.y)]);
        neighbors.push(cells[getIndex(this.x, this.y + 1)]);
        neighbors.push(cells[getIndex(this.x - 1, this.y)]);
        return(neighbors.filter(x => x && !x.isVisited));
    }

    show(){
        fill(0, 255, 0);
        rect(this.x * sizeOfCell, this.y * sizeOfCell, sizeOfCell, sizeOfCell);
    }
    static removeWall(cell1, cell2){
        let xDiff = cell2.x - cell1.x;
        let yDiff = cell2.y - cell1.y;
        if(xDiff > 0){

            cell2.walls[1] = false;
        }
        else if(xDiff < 0){
            cell1.walls[1] = false;
        }
        else if(yDiff > 0){
            cell2.walls[0] = false;
        }
        else if(yDiff < 0){
            cell1.walls[0] = false;
        }

        
    }
}

function getIndex(x,y){
    if(x < 0 || x > colsRows - 1 || y < 0 || y > colsRows - 1){
        return(-1);
    }
    else{
        return(x + y * colsRows);
    }
}