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
                console.log(neighborDists); 
                visitedNodesInOrder.push(curNode); 
                break; 
            }
        }
    }
    return visitedNodesInOrder; 
}

function getNeighbors(node,grid,endNode) {
    const neighbors = []; 
    const neighborDists = []; 
    const dir = [[1,0],[-1,0],[0,-1],[0,1]];
    const expo = 10; 
    for(let i = 0; i < 4; i++) {
        const nextRow = node.row + dir[i][0]; 
        const nextCol = node.col + dir[i][1]; 
        if(nextRow >= 0 && nextRow <= grid.length-1 && nextCol >=0 && nextCol <= grid[0].length-1 && !grid[nextRow][nextCol].isWall) {
            neighbors.push(grid[nextRow][nextCol]); 
        }
    } 
    sortByDist(neighbors); 
    var neighborDist = 0;
    for(let i = neighbors.length-1; i >= 0; i--) {
        neighborDist += Math.pow(neighbors[i].dist,expo); 
        neighborDists.push(neighborDist);
    }
    return [neighbors,neighborDists]; 
}

function sortByDist(neighbors) {
    neighbors.sort((nodeA, nodeB) => nodeA.dist - nodeB.dist); 
}

function updateDist(grid,endNode) {
    for(const row of grid) {
        for(const node of row) {
            node.dist = Math.abs(endNode.row-node.row) + Math.abs(endNode.col-node.col);
        }
    }
}