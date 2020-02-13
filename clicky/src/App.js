import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import characters from './characters.json';


class App extends React.Component {

  state ={
    score: 0,
    topScore: 0,
    clicked: []
  }

  handleCharacterClick = (id) => {
    console.log(id);
    this.setState({score: this.state.score + 1});
  }

  render() {
    return(
    <div>
      < Header score={this.state.score} topScore={this.state.topScore}/>
      < Jumbotron/>
        < Wrapper>
        {
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
