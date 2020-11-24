import React , {Component} from 'react';
import './Neuron.css';

export default class Neuron extends Component {
    constructor(props) {
        super(props);
        this.state = {}; 
    }

    render() {
        const {
            tag,
        } = this.props; 
        const type = tag==='AWC' ? 'neuron' : 'inter-neuron';
        return (
            <div 
                id = {`neuron-${tag}`}
                className = {`${type}`}>
                {tag}
            </div>
        );
    }
}
//yo the css subclasses have to be underneath the higher ones 