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
                    <h1 className="display-4">August Bootcamp Demo Day!</h1>
                    <p className="lead">August 6th, 2020</p>
                    <p className="lead">Will you be ready!</p>
                </div>
            </div>
        );
}

export default Header;