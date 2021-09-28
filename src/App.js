import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Demo from './components/Demo';
const styles = {
  jumbotron: {
    textAlign: "center",
    color: "white",
    background: "none",
    textShadow: "2px 2px #000000",
    fontFamily: 'Bonheur Royale', 
    fontSize:"calc(32px + 1.5vw)"
  }
};
class App extends Component {

  constructor(props) {
    super(props);
    this.theDate = "October 3, 2021 10:00:00 GMT-05:00";
  }
  formatDate(string) {
    var startDate = new Date(string);
    var endDate = new Date();
    var seconds = Math.ceil((startDate.getTime() - endDate.getTime()) / (1000 * 60 * 60));

    return seconds;
  }

  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: 'center' }, styles.jumbotron}>{this.formatDate(this.theDate)} Hours Remaining</h1>
        <Header />
        <Demo theDate={this.theDate} />
      </div>
    )
  }
}

export default App;