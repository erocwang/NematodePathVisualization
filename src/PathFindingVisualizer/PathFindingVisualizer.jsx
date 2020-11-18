// (c) 2020 eric wang 
import React, {Component} from 'react';
import Node from './Node/Node';
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
        }; 
    }

    componentDidMount() {
        const grid = getInitialGrid(); 
        this.setState({grid});
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
            setTimeout(() => {
                document.getElementById(`node-${node.row}-${node.col}`).className =
                'node node-visited';
            }, 50 * (i+1) - 50); 
            setTimeout(() => {
                document.getElementById(`node-${node.row}-${node.col}`).className =
                'node node-seen';
            }, 50 * (i+1) - 25); 
        }
    }

    render() {
        const {grid} = this.state; 
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

