import React from 'react';

const styles = {
    jumbotron: {
        textAlign: "center",
        color: "white",
        background: "none",
        textShadow: "2px 2px #000000",
        fontFamily: 'Bonheur Royale'
      }
  };

function Header (){
        return(
            <div className="jumbotron jumbotron-fluid" id="the-jumbotron" style={{background:"none"}}>
                <div className="container" style={styles.jumbotron}>
                    <h1 className="display-4" style={{fontSize:"calc(64px + 1.5vw)"}}>Morris Arboretum’s Scarecrow Walk</h1>
                    <p className="lead" style={{fontSize:"calc(12px + 1.5vw)"}}>October 3rd, Sunday Morning?</p>
                    <p className="lead" style={{fontSize:"calc(12px + 1.5vw)"}}>Will you be ready!</p>
                </div>
            </div>
        );
}

export default Header;