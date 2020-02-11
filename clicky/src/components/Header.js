import React from "react";

class Header extends React.Component{
    // Initial state
    state = {
        score: 0,
        topScore: 0
    };

    // Event to handle new top scores
    handleIncrement = () => {
        this.setState({});
    };

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Clicky Game</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>Click an image to start playing</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="score">Score: {this.state.score} || Top Score: {this.state.topScore} </h4>
                    </div>
                </div>
             </div>
            </nav>
        );
    }
    }

export default Header;