import React from 'react';

const styles = {
    jumbotron: {
        textAlign: "center",
        color: "white",
        background: "none",
        textShadow: "2px 2px #000000"
      }
  };

function Header (){
        return(
            <div className="jumbotron jumbotron-fluid" id="the-jumbotron" style={{background:"none"}}>
                <div className="container" style={styles.jumbotron}>
                    <h1 className="display-4">'Thom' Party Invite!</h1>
                    <p className="lead">February 29th, 2020</p>
                    <p className="lead">starting at 6:30pm</p>
                    <p className="lead">Are you coming to the party?</p>
                </div>
            </div>
        );
}

export default Header;