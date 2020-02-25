import React, { Component } from 'react';
import Confetti from 'react-confetti'

const styles = {
    container:{
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingLeft: "0px",
        paddingRight: "0px",
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "center",
    }
};



class Game extends Component {
    

    state = {
        playConfetti: false
    }

    setIsShown = (theState) =>{
        if(theState===true){
            document.getElementById("no-button").style.visibility = "hidden";
        }
        else{
            document.getElementById("no-button").style.visibility = "visible";
        }

    }
    buttonClicked = () =>{
        console.log("good");
        this.setState({ playConfetti: true})
    }
    
    showGreeting = () =>{
        return (
            <div className="greeting-class">
                <h1>There was no other option!</h1>
                <br/>
                <h3>
                    Food and beverages
                </h3>
                <ul style={{listStyleType:"none",paddingLeft:"0px"}}>
                    <li>Cookies</li>
                    <li>Chorizo Empanadas</li>
                    <li>Chips and salsa verde</li>
                    <li>Wine</li>
                    <li>Beer</li>
                    <li>Burbon</li>
                    <li>Assorted teas</li>
                </ul>  
                <h3>
                    Games
                </h3>
                <ul style={{listStyleType:"none",paddingLeft:"0px"}}>
                    <li>Harry Potter Pictopia</li>
                    <li>Catch Phrase</li>
                    <li>Cards Against Humanity</li>
                </ul>  
            </div>
        );
    }
    
    render() {
        const isPlayingConfetti = this.state.playConfetti;
        return (
            <main className="container" id="gameBoard" style={styles.container}>
                <Confetti 
                    run={this.state.playConfetti}
                />
                {
                    isPlayingConfetti === false && 
                    <div id="button-div" 
                        onMouseEnter={() => this.setIsShown(true)}
                        onMouseLeave={() => this.setIsShown(false)}
                        >
                        <button type="button" className="btn btn-primary" id="yes-button" style={{margin: "20px"}} onClick={this.buttonClicked}>Yes</button>
                        <button type="button" className="btn btn-primary" id="no-button" style={{margin: "20px"}}>No</button>
                    </div>
                }
                {
                    isPlayingConfetti === true && 
                        this.showGreeting()
                }
            </main>
        );
    };
}

export default Game;