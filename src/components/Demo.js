import React, { Component } from 'react';
import Confetti from 'react-confetti/dist/react-confetti';

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

class Demo extends Component {
    

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
        document.getElementById("the-jumbotron").style.display = "none";
        return (
            <div className="greeting-class">
                <h1>Heck yeah!</h1>
                <br/>
                <h2>It is going to be fun and exciting!</h2>
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

export default Demo;