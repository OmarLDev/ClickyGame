import React from "react";
import "../style.css";

class Card extends React.Component {
    state ={
        name: "Test",
        image: "img",
        isClicked: false
    };
    
    render(){
        return(
            <div className="card">
                <img className="card-img" 
                    src={this.state.image}
                    alt={this.state.name}/>
            </div>
        );
    }
}

export default Card;