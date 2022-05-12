import './App.css';
import React from 'react';
import Character from './componets/character/character';
import Header from './componets/header/header';
import Footer from './componets/footer/footer';

//import logo from './img/sfondo.png'
const axios = require('axios');



class App extends React.Component {

  constructor(){
    super()
    this.state = {
      characters:[],
      locaNumber : 0,
      episodes : 0,
      characterNumber : 0,
      episNumber : 0
    }
  }

  componentDidMount(){
    axios.get("https://rickandmortyapi.com/api/character").then(result => {
      this.setState({
        characters: result.data.results,
        characterNumber : result.data.info.count
      })

    })
    axios.get("https://rickandmortyapi.com/api/location").then(result => {
      this.setState({
        locaNumber : result.data.info.count
      })  
    
    })
    axios.get("https://rickandmortyapi.com/api/episode").then(result => {
      this.setState({
        episodes : result.data.info.count
      })  
    })
  }

  render(){
    console.log(this.state.characters)
    const index = Math.round(Math.random()*14)
    const selectedCharacter = this.state.characters.slice(index, index + 6)
    return (
      
      <div>
        
        <Header/>

        <div className='figure' >
          <div className='containerImg'>

          {
            selectedCharacter.map((character, i) => 
              <Character key={i} img = {character.image} title = {character.name} description={character.type}/>)
          }
          </div>
        </div>

        <Footer charNumber = {this.state.characterNumber} locaNumber = {this.state.locaNumber} episNumber = {this.state.episodes}/>

      </div>
    );
  }
}

export default App;
