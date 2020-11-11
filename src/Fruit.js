import React from 'react';
import ReactDOM from 'react-dom';
import './fruit.css';

class Fruit extends React.Component {

    render() {
        return (
            <div>
            <h1>name: {this.props.name}</h1>
            <h3>Color: {this.props.color}</h3>
            <h3>Price: {this.props.price}</h3>
            </div>
        )
    }

}

export default Fruit