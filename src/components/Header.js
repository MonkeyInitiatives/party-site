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
            <div className="jumbotron jumbotron-fluid" >
                <div className="container" style={styles.jumbotron}>
                    <h1 className="display-4">Thom's Party Site!</h1>
                    <p className="lead">Are you coming to the party?</p>
                </div>
            </div>
        );
}

export default Header;