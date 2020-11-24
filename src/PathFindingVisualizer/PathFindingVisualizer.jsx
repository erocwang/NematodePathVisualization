import React, {Component} from 'react';
import Node from './Node/Node';
import Neuron from './Neuron/Neuron';
import {nematode} from '../Algorithms/Nematode'; 

import './PathFindingVisualizer.css';

const START_ROW = 0; 
const START_COL = 0; 
const END_ROW = 19; 
const END_COL = 49; 

export default class PathFindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            circuit: [], 
        }; 
    }

    componentDidMount() {
        const grid = getInitialGrid(); 
        const circuit = getInitialCircuit(); 
        this.setState({grid,circuit});
    }

    visualizeNematode() {
        const {grid} = this.state; 
        const startNode = grid[START_ROW][START_COL]; 
        const endNode = grid[END_ROW][END_COL]; 
        const visitedNodesInOrder = nematode(grid,startNode,endNode);
        this.animateNematode(visitedNodesInOrder);  
    }

    animateNematode(visitedNodesInOrder) {
        for(let i=0; i<visitedNodesInOrder.length-1; i++) {
            const node = visitedNodesInOrder[i];
            const prev = i===0 ? 1000 : visitedNodesInOrder[i-1].dist; 
            setTimeout(() => {
                document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
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
        const {grid,circuit} = this.state; 
        return (
            <>
            <button onClick={() => this.visualizeNematode()}>
                Visualize Nematode
            </button>
            <div className = "grid"> 
                {grid.map((row,rowIdx) => {
                    return <div key={rowIdx}>
                        {row.map((node,nodeIdx) => {
                            const {row,col,isStart,isEnd} = node; 
                            return (
                                <Node
                                key = {nodeIdx}
                                row = {row}
                                col = {col}
                                isStart = {isStart}
                                isEnd = {isEnd}
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

