import React , {Component} from 'react';
import './Node.css';

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {}; 
    }

    render() {
        const {
            row, 
            col, 
            isStart,
            isEnd,
        } = this.props; 
        const coloring = isEnd ? 'node-end' : isStart ? 'node-start' : '';
        return (
            <div 
                id = {`node-${row}-${col}`}
                className={`node ${coloring}`}> 
            </div> 
        );
    }
}