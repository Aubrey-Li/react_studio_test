import React from 'react';
import './fruit.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
  
class Airbnb extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <h2>Name: {this.props.name}</h2>
                    <p>Description: {this.props.descr}</p>
                    <p>Price: {this.props.price}</p>
                    <p>Rating: {this.props.rating}</p>
                    <Button variant="contained" color="primary">
                        Learn more
                    </Button>
                </Card>  
                <br /> 
            </div>
        )
    }

}


export default Airbnb