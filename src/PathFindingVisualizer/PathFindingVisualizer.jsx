import React, {Component} from 'react';
import Node from './Node/Node';
import Neuron from './Neuron/Neuron';
import {nematode} from '../Algorithms/Nematode'; 

import './PathFindingVisualizer.css';

const START_ROW = 10; 
const START_COL = 10; 
const END_ROW = 10; 
const END_COL = 40; 

export default class PathFindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            circuit: [], 
            mouseIsPressed: false, 
        }; 
    }

    componentDidMount() {
        const grid = getInitialGrid(); 
        const circuit = getInitialCircuit(); 
        this.setState({grid,circuit});
    }

    handleMouseDown(row, col) {
        const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
        this.setState({grid: newGrid, mouseIsPressed: true});
    }
    
    handleMouseEnter(row, col) {
        if (!this.state.mouseIsPressed) return;
        const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
        this.setState({grid: newGrid});
    }
    
    handleMouseUp() {
        this.setState({mouseIsPressed: false});
    }

    reset() {
        for (let row = 0; row < 20; row++) {
            for (let col = 0; col < 50; col++) {
                if((row!==START_ROW || col!==START_COL) && (row!==END_ROW || col!==END_COL)) {
                    document.getElementById(`node-${row}-${col}`).className = 'node';
                }
            }
        }
        document.getElementById(`neuron-AWC`).className = 'neuron';
        document.getElementById(`neuron-AIB`).className = 'inter-neuron';
        document.getElementById(`neuron-AIY`).className = 'inter-neuron';
    }

    floodVisualize() {
        for(let i=0; i<10; i++) {
            this.visualizeNematode(); 
        }
    }

    visualizeNematode() {
        const {grid} = this.state; 
        const startNode = grid[START_ROW][START_COL]; 
        const endNode = grid[END_ROW][END_COL]; 
        const visitedNodesInOrder = nematode(grid,startNode,endNode);
        this.animateNematode(visitedNodesInOrder);  
    }

    animateNematode(visitedNodesInOrder) {
        for(let i=1; i<visitedNodesInOrder.length-1; i++) {
            const node = visitedNodesInOrder[i];
            const prev = i===0 ? 1000 : visitedNodesInOrder[i-1].dist; 
            setTimeout(() => {
                if(node.row!==START_ROW || node.col!==END_COL) document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
                if(node.dist > prev) {
                    document.getElementById(`neuron-AWC`).className = 'neuron green';
                    document.getElementById(`neuron-AIB`).className = 'inter-neuron red';
                    document.getElementById(`neuron-AIY`).className = 'inter-neuron off';
                }
                else {
                    document.getElementById(`neuron-AWC`).className = 'neuron off';
                    document.getElementById(`neuron-AIB`).className = 'inter-neuron off';
                    document.getElementById(`neuron-AIY`).className = 'inter-neuron blue';
                }
            }, 50 * (i+1) - 50); 
            setTimeout(() => {
                document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-seen';
            }, 50 * (i+1) - 25); 
        }
    }

    render() {
        const {grid,circuit,mouseIsPressed} = this.state; 
        return (
            <>
            <div className = "back">
            <div className = "navigation"> 
                <button class = "button1" onClick={() => this.visualizeNematode()}>
                    Visualize Nematode
                </button>
                    <button class = "button1" onClick={() => this.floodVisualize()}>
                        Flood!
                    </button>
                    <button class = "button1" onClick={() => this.reset()}>
                        Reset 
                    </button>
            </div> 
            <div className = "grid"> 
                {grid.map((row,rowIdx) => {
                    return <div key={rowIdx}>
                        {row.map((node,nodeIdx) => {
                            const {row,col,isStart,isEnd,isWall} = node; 
                            return (
                                <Node
                                key = {nodeIdx}
                                row = {row}
                                col = {col}
                                isStart = {isStart}
                                isEnd = {isEnd}
                                isWall={isWall}
                                mouseIsPressed={mouseIsPressed}
                                onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                                onMouseEnter={(row, col) =>
                                  this.handleMouseEnter(row, col)
                                }
                                onMouseUp={() => this.handleMouseUp()}
                                ></Node>
                            );
                        })}
                    </div> 
                })}
            </div> 
            <div className = "circuit"> 
                {circuit.map((col,colIdx) => {
                    return <div key={colIdx} className="container">
                        {col.map((neuron,neuronIdx) => {
                            const {tag} = neuron;
                            return (
                                <Neuron 
                                key = {neuronIdx}
                                tag = {tag}
                                ></Neuron> 
                            );
                        })}
                    </div>
                })}
            </div>
            </div>
            </>
        );
    }
}

const createNode = (row,col) => {
    return {
        row, 
        col, 
        isStart : row === START_ROW && col === START_COL,
        isEnd : row === END_ROW && col === END_COL,  
        dist : Infinity, 
    };
};

const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(row, col));
      }
      grid.push(currentRow);
    }
    return grid;
  };

const createNeuron = (tag) => {
    return {
        tag, 
    };
};

const getInitialCircuit = () => {
    const circuit = []; 
    const col_1 = []; 
    col_1.push(createNeuron('AWC'));
    const col_3 = []; 
    col_3.push(createNeuron('AIB'));
    col_3.push(createNeuron('AIY'));
    circuit.push(col_1);
    circuit.push(col_3); 
    return circuit; 
};

const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
};

