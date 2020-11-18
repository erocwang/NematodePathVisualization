// (c) 2020 eric wang  

export function nematode(grid,startNode,endNode) {
    updateDist(grid,endNode); 
    const visitedNodesInOrder = [];
    var curNode = startNode;  
    while((curNode!==endNode)) {    
        const [neighbors,neighborDists] = getNeighbors(curNode,grid);
        const totalDist = neighborDists[neighborDists.length-1]; 
        const r = Math.random()*totalDist; 
        for(let i=0; i<neighborDists.length; i++) {
            if(r <= neighborDists[i]) {
                curNode = neighbors[i];
                visitedNodesInOrder.push(curNode); 
                break; 
            }
        }
    }
    return visitedNodesInOrder; 
}

function getNeighbors(node,grid) {
    const neighbors = []; 
    const neighborDists = []; 
    const {row,col} = node; 
    var neighborDist = 0;
    if(row>0) {
        neighbors.push(grid[row-1][col]);
        neighborDist+=grid[row-1][col].dist; 
        neighborDists.push(neighborDist); 
    }
    if(row<grid.length-1) {
        neighbors.push(grid[row+1][col]);
        neighborDist+=grid[row+1][col].dist; 
        neighborDists.push(neighborDist); 
    }
    if(col>0) {
        neighbors.push(grid[row][col-1]);
        neighborDist+=grid[row][col-1].dist; 
        neighborDists.push(neighborDist); 
    }
    if(col<grid[0].length-1) {
        neighbors.push(grid[row][col+1]); 
        neighborDist+=grid[row][col+1].dist; 
        neighborDists.push(neighborDist); 
    }
    return [neighbors,neighborDists]; 
}

function updateDist(grid,endNode) {
    const maxDist = endNode.row+endNode.col; 
    for(const row of grid) {
        for(const node of row) {
            node.dist = Math.pow((maxDist - (Math.abs(endNode.row-node.row) + Math.abs(endNode.col-node.col))),10);
        }
    }
}