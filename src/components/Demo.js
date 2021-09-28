import React, { Component } from 'react';
import Confetti from 'react-confetti/dist/react-confetti';

const styles = {
    container: {
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingLeft: "0px",
        paddingRight: "0px",
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "center",
        fontFamily: 'Bonheur Royale'

    },
    jumbotron: {
        textAlign: "center",
        color: "white",
        background: "none",
        textShadow: "2px 2px #000000",
        fontFamily: 'Bonheur Royale'

    }
};

class Demo extends Component {


    state = {
        playConfetti: false
    }

    setIsShown = (theState) => {
        if (theState === true) {
            document.getElementById("no-button").style.visibility = "hidden";
        }
        else {
            document.getElementById("no-button").style.visibility = "visible";
        }

    }
    buttonClicked = () => {
        console.log("good");
        this.setState({ playConfetti: true })
    }
    hideMe = () => {
        console.log("bad");
        this.setIsShown(true)
    }

    showGreeting = () => {
        document.getElementById("the-jumbotron").style.display = "none";
        return (
            <div className="greeting-class" style={styles.jumbotron}>
                <h1 style={{fontSize:"calc(72px + 1.5vw)"}}>Heck yeah!</h1>
                <br />
                {/* <h2>It is going to be fun and exciting!</h2> */}
            </div>
        );
    }

    render() {
        const isPlayingConfetti = this.state.playConfetti;
        return (
            <main className="container" id="gameBoard" style={styles.container}>
                <Confetti
                    run={this.state.playConfetti}
                    numberOfPieces={500}
                />
                {
                    isPlayingConfetti === false &&
                    <div id="button-div"
                    >
                        <button type="button" className="btn btn-primary" id="yes-button" style={{ margin: "20px", fontSize:"calc(12px + 1.5vw)" }} onClick={this.buttonClicked}
                            onMouseEnter={() => {
                                document.getElementById("yes-button").style.transform = "scale(3.5)";
                                document.getElementById("yes-button").style.transition = "all .2s ease-in-out";
                            }}
                            onMouseLeave={() => {
                                document.getElementById("yes-button").style.transform = "scale(1.0)";
                                document.getElementById("yes-button").style.transition = "all .2s ease-in-out";
                            }}
                        >Yes</button>
                        <button type="button" className="btn btn-primary" id="no-button" style={{ margin: "20px", position: "relative", fontSize:"calc(12px + 1.5vw)" }}
                            onMouseEnter={() => {
                                document.getElementById("no-button").style.left = (Math.random() * (Math.random() < 0.5 ? -1 : 1) * 200) + "px";
                                document.getElementById("no-button").style.top = (Math.random() * (Math.random() < 0.5 ? -1 : 1) * 200) + "px";
                            }}
                            onClick={this.hideMe}
                        >No</button>
                    </div>
                }
                {
                    isPlayingConfetti === true &&
                    this.showGreeting()
                }
            </main >
        );
    };
}

export default Demo;