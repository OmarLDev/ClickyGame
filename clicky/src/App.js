import React from 'react';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import characters from './characters.json';


class App extends React.Component {

  // Initial state
  state ={
    score: 0,
    topScore: 0,
    clicked: [],
    characters: characters
  }

  // Function to handle when a user has clicked all images correctly
  handleWin = () =>{

  }

  // Function to handle when a user clicked twice on an element
  handleLoss =() =>{
    this.setState({
      score: 0,
      clicked: []
    });
  }

  // Event to handle if an image has been clicked twice
  handleCharacterClick = (id) => {
    if(!this.state.clicked.includes(id)){
      this.setState(state => {
        const newArray = state.clicked.concat(id);
        if(this.state.score === this.state.topScore){
          this.setState({topScore: this.state.topScore +1})
        }
        return{clicked: newArray,
               score: this.state.score + 1
        }
      });
    }else{
      this.handleLoss();
    }
  }

  render() {
    return(
    <div>
      < Header score={this.state.score} topScore={this.state.topScore}/>
      < Jumbotron/>
        < Wrapper>
        {
          // Iterating the character list to display
          characters.map( element => 
            < Card image={element.image} 
                    name={element.name} 
                    handleCharacterClick={() => this.handleCharacterClick(element.id)}/>
          )
        }
      </Wrapper>
    </div>
    );
  }
}

export default App;
