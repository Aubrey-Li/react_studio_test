import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Airbnb from './airbnb.js'

class App extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        items: [
          {name: "New Hampshire Woodland Cabin", descr: "2-bedroom woodland cabin for family loving nature and seek isolation from COVID", 
          price: "$100/night", rating: "5/5"},
          {name: "Central NYC Apartment", descr: "Studio style one-person apartment with large bedroom, kitchen, and a big window for New york skyline!", 
          price: "$98/night", rating: "4/5"},
          {name: "Graduate Center B luxury student suite", descr: "Great location for isolation, exquisite Ratty cuisine, and soviet style architectural style.", 
          price: "$38/night", rating: "4.5/5"}
        ]
      };
    }
    render() {
      return (
        <div className="main">
          {this.state.items.map(
            (airbnb) => <Airbnb name={airbnb.name} descr={airbnb.descr} price={airbnb.price} rating={airbnb.rating}></Airbnb>)}
        </div>
      )
    }
    
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
