//nematode algorithm for choosing path 
export function nematode(grid,startNode,endNode) {
    updateDist(grid,endNode); 
    const visitedNodesInOrder = [];
    var curNode = startNode;  
    var count = 1000; 
    while((curNode!==endNode) && count) {   
        count--; 
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

//return a list of nodes in ascending distance order
//return a list of prefix sums of node distances in reverse order 
function getNeighbors(node,grid,endNode) {
    const neighbors = []; 
    const neighborDists = []; 
    const dir = [[1,0],[-1,0],[0,-1],[0,1]];
    const expo = 10; 
    var neighborDist = 0; 
    var weights = 0; 
    for(let i = 0; i < 4; i++) {
        const nextRow = node.row + dir[i][0]; 
        const nextCol = node.col + dir[i][1]; 
        if(nextRow >= 0 && nextRow <= grid.length-1 && nextCol >=0 && nextCol <= grid[0].length-1 && !grid[nextRow][nextCol].isWall) {
            neighbors.push(grid[nextRow][nextCol]); 
            neighborDist += Math.pow(grid[nextRow][nextCol].dist,expo); 
            if(grid[nextRow][nextCol].dist>node.dist) {
                neighborDists.push((50-grid[nextRow][nextCol].dist)/2); 
            }
            else {
                neighborDists.push((50-grid[nextRow][nextCol].dist)); 
            }
            weights += neighborDists[neighborDists.length-1]; 
        }
    }
    var curneighborDists = 0; 
    for(let i=0; i<neighbors.length; i++) {
        curneighborDists += neighborDists[i]/weights*neighborDist; 
        neighborDists[i] = (curneighborDists); 
    }
    //console.log(neighbors);
    return [neighbors,neighborDists]; 
}

//sort nodes by distance in ascending order 
function sortByDist(neighbors) {
    neighbors.sort((nodeA, nodeB) => nodeA.dist - nodeB.dist); 
}

//initally set the distances of all nodes 
function updateDist(grid,endNode) {
    for(const row of grid) {
        for(const node of row) {
            node.dist = Math.abs(endNode.row-node.row) + Math.abs(endNode.col-node.col);
        }
    }
}