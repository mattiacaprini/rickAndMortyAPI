import React from "react";
import './footer.css'

function Footer(PROPS){
    return(
        <div className='footer' >
          <div className='txt_footer'>
            <p><span>CHARACTERS: {PROPS.charNumber}</span></p>
            <p><span>LOCATIONS: {PROPS.locaNumber}</span></p>
            <h5>EPISODES: {PROPS.episNumber}</h5>
            <h5>❮❯ by Axel Fuhrmann 2022</h5>
          </div>
        </div>
    )
}

export default Footer