import React, { Component } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Game from './components/Game';

class App extends Component {

  constructor(props) {
      super(props);
      this.theDate= "2020-02-29T12:59-0500";  // I declare the variable here
  }
  formatDate(string){
    var options = {month: 'long', day: 'numeric',year: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }

  render() {
    return (
      <div className="container">
        <h1 style={{textAlign:'center'}}>{this.formatDate(this.theDate)}</h1>
        {/* <Navbar /> */}
        <Header />
        <Game theDate={this.theDate}/>
      </div>
    )
  }
}

export default App;