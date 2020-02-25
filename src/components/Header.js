import React from 'react';

const styles = {
    jumbotron: {
        textAlign: "center",
        color: "white",
        background: "none",
        textShadow: "2px 2px #000000"
      },
    jumbotronContainer: {
        // backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/59080aa2e4fcb5d6e2675697/1495284920257-5YS4COFLELSZHRE3NTG9/ke17ZwdGBToddI8pDm48kKhl6Rc1dYqS1qz1Ddvxbt8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcLtE6jbomlefxjlv1SY3PZE1bBJc0KjuViY-aa3YRkLL6dq1YBMAqvzlG2eN2RAWL/curtains.jpg?format=2500w')",
        // background: "cover"
        background: "none"
    }
  };

function Header (){
        return(
            <div className="jumbotron jumbotron-fluid" style={styles.jumbotronContainer}>
                <div className="container" style={styles.jumbotron}>
                    <h1 className="display-4">Thom's Party Site!</h1>
                    <p className="lead">Are you coming to the party?</p>
                </div>
            </div>
        );
}

export default Header;