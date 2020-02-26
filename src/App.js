import React, { Component } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Game from './components/Game';

class App extends Component {

  constructor(props) {
      super(props);
      //const event = new Date('');
      this.theDate= "February 29, 2020 18:30:00 GMT-05:00";  // I declare the variable here
  }
  formatDate(string){
    var startDate = new Date(string);
    var endDate = new Date();
    /*
    var startDate = new Date();
    var endDate   = new Date();
    var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    */
   var seconds = Math.ceil((startDate.getTime() - endDate.getTime()) / (1000*60*60));

    return seconds;
  }

  render() {
    return (
      <div className="container">
        <h1 style={{textAlign:'center'}}>{this.formatDate(this.theDate)} Hours Remaining</h1>
        {/* <Navbar /> */}
        <Header />
        <Game theDate={this.theDate}/>
      </div>
    )
  }
}

export default App;