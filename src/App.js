import './App.css';
import React from 'react';
import Character from './character';

class App extends React.Component {
    
  render(){
    return (
      
      <page>
        <header className='headerSite'>
          <div className='insideHeaderUp'>
            <div className='logo'>
              <image> <h1>Logo</h1> </image>
            </div>

            <div className='menu'>
                <li><a>docs</a></li>
                <li><a>about</a></li>
                <li><a>support us</a></li>
            </div>
          </div>

          <div className='title'>
            <h1>The Rick and Morty API</h1>
          </div>
        </header>

        <div className='figure' >
          <div className='containerImg'>

          <Character></Character>


          </div>
        </div>

        <div className='footer' >
        </div>

      </page>

    );
  }
}

export default App;
