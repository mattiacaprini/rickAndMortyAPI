import './App.css';
import React from 'react';
import Character from './componets/character/character';
import Header from './componets/header/header';
import Footer from './componets/footer/footer';

import mostro1 from './img/immagine1.jpeg'
import mostro2 from './img/immagine2.jpeg'
import mostro3 from './img/immagine3.jpeg'
import mostro4 from './img/immagine4.jpeg'
import mostro5 from './img/immagine5.jpeg'
import mostro6 from './img/immagine6.jpeg'
//import logo from './img/sfondo.png'




class App extends React.Component {
    
  state = {
    characters:[
      {img: mostro1, title: "Hamster In Butt", description: "17 anni", id: 0},
      {img: mostro2, title: "Risotto's Tentacled Henchman", description: "19 anni", id:1},
      {img: mostro3, title: "Worldender", description: "22 anni", id: 2},
      {img: mostro4, title: "Heistotron", description: "21 anni", id: 3},
      {img: mostro5, title: "Adam's Mother", description: "24 anni", id: 4},
      {img: mostro6, title: "Scarecrow Beth", description: "30 anni", id: 5},
    ]
  }

  render(){
    return (
      
      <page>
        
        <Header/>

        <div className='figure' >
          <div className='containerImg'>
          {
            this.state.characters.map((character, i) =>  <Character key={i} img = {character.img} title = {character.title} description={character.description}/>)
          }
          </div>
        </div>

        <Footer/>

      </page>
    );
  }
}

export default App;
