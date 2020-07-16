import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Demo from './components/Demo';

class App extends Component {

  constructor(props) {
      super(props);
      this.theDate= "August 6, 2020 18:30:00 GMT-05:00";
  }
  formatDate(string){
    var startDate = new Date(string);
    var endDate = new Date();
    var seconds = Math.ceil((startDate.getTime() - endDate.getTime()) / (1000*60*60));

    return seconds;
  }

  render() {
    return (
      <div className="container">
        <h1 style={{textAlign:'center'}}>{this.formatDate(this.theDate)} Hours Remaining</h1>
        <Header />
        <Demo theDate={this.theDate}/>
      </div>
    )
  }
}

export default App;