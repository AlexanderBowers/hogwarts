import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hog from "./Hog.js"

class App extends Component {

  constructor () {
    super()
    this.state = {
      grease: false,
      hogs: hogs
    }
  }
//if state of grease is true, show all hogs that have property of greased = true
//if state of grease is false, show all hogs
  handleGrease= () => {

    this.setState({
      grease: !this.state.grease
    })
    this.state.grease ? this.setState({hogs: hogs.filter(hog => hog.greased)}) :this.setState({hogs: hogs})

  }

  orderName= () => {
    this.setState({
      hogs: hogs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0 ))
    })
  }

  orderWeight= () => {
    this.setState({
      hogs: hogs.sort((a,b) => (a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0 ))
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick = {this.handleGrease}>Filter By Grease</button>
        <button onClick = {this.orderName}>Order By Name</button>
        <button onClick = {this.orderWeight}>Order By Weight</button>
        {this.state.hogs.map((hog) => {
          return  <Hog name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} />
        })}
      </div>
    );
  }
}

export default App;

//name, specialty, greased, weight, 'highest medal achieved'
