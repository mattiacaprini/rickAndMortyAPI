import React from "react";
import './footer.css'

function Footer(PROPS){
    return(
        <div className='footer' >
          <div className='txt_footer'>
            <li><a>CHARACTERS: {PROPS.charNumber}</a></li>
            <li><a>LOCATIONS: {PROPS.locaNumber}</a></li>
            <h5>EPISODES: {PROPS.episNumber}</h5>
            <h5>❮❯ by Axel Fuhrmann 2022</h5>
          </div>
        </div>
    )
}

export default Footer