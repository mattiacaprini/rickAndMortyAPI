import React from "react";
import './character.css';

function Character(PROPS){
    return(
        <div className="show_case">

            <div className="container_img_monster" >
                <img className="img_monster" src={PROPS.img} alt="img" />
            </div>

            <div className="title_txt">
                <h1>{PROPS.title}</h1>
                <h3>{PROPS.description}</h3>
            </div>
        </div>
    )
}

export default Character