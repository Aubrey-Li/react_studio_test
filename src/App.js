import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fruit from './Fruit.js'

class App extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        items: [
          {name: "Apple", color: "red", rice: "1 dollar"},
          {name: "Apple", color: "green", rice: "2 dollars"},
          {name: "Apple", color: "yellow", rice: "2 dollars"}
        ]
      };
    }
    render() {
      return (
        <div className="main">
          {this.state.items.map(
            (fruit) => <Fruit name={fruit.name} color={fruit.color} price={fruit.price}></Fruit>
      )}
        </div>
      )
    }
    
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
