export function nematode(grid,startNode,endNode) {
    updateDist(grid,endNode); 
    const visitedNodesInOrder = [];
    var curNode = startNode;  
    while((curNode!==endNode)) {    
        const [neighbors,neighborDists] = getNeighbors(curNode,grid,endNode);
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

// sort the nodes by distance, then grab the corresponding distances and put into list, reverse this distance list and use that mapping to determine randomization weightings 
function getNeighbors(node,grid,endNode) {
    const neighbors = []; 
    const neighborDists = []; 
    const {row,col} = node; 
    var neighborDist = 0;
    const expo = 5; 
    if(row>0) {
        neighbors.push(grid[row-1][col]);
        if(Math.abs(endNode.row-grid[row-1][col].row) + Math.abs(endNode.col-grid[row-1][col].col) > Math.abs(endNode.row-node.row) + Math.abs(endNode.col-node.col))  neighborDist+=Math.pow(grid[row-1][col].dist/2,expo);
        else neighborDist+=Math.pow(grid[row-1][col].dist,expo); 
        neighborDists.push(neighborDist); 
    }
    if(row<grid.length-1) {
        neighbors.push(grid[row+1][col]);
        if(Math.abs(endNode.row-grid[row+1][col].row) + Math.abs(endNode.col-grid[row+1][col].col) > Math.abs(endNode.row-node.row) + Math.abs(endNode.col-node.col))  neighborDist+=Math.pow(grid[row+1][col].dist/2,expo);
        else neighborDist+=Math.pow(grid[row+1][col].dist,expo); 
        neighborDists.push(neighborDist); 
    }
    if(col>0) {
        neighbors.push(grid[row][col-1]);
        if(Math.abs(endNode.row-grid[row][col-1].row) + Math.abs(endNode.col-grid[row][col-1].col) > Math.abs(endNode.row-node.row) + Math.abs(endNode.col-node.col))  neighborDist+=Math.pow(grid[row][col-1].dist/2,expo);
        else neighborDist+=Math.pow(grid[row][col-1].dist,expo); 
        neighborDists.push(neighborDist); 
    }
    if(col<grid[0].length-1) {
        neighbors.push(grid[row][col+1]); 
        if(Math.abs(endNode.row-grid[row][col+1].row) + Math.abs(endNode.col-grid[row][col+1].col) > Math.abs(endNode.row-node.row) + Math.abs(endNode.col-node.col))  neighborDist+=Math.pow(grid[row][col+1].dist/2,expo);
        else neighborDist+=Math.pow(grid[row][col+1].dist,expo); 
        neighborDists.push(neighborDist); 
    }
    return [neighbors,neighborDists]; 
}

function updateDist(grid,endNode) {
    const maxDist = endNode.row+endNode.col; 
    for(const row of grid) {
        for(const node of row) {
            node.dist = maxDist - (Math.abs(endNode.row-node.row) + Math.abs(endNode.col-node.col));
        }
    }
}