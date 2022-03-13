import React from 'react';
import CustomAvatar from "../CustomAvatar"
import StyledPlayer from "./styled"

const Player = ({
    name
}) => {

    return (
        <StyledPlayer>
            <CustomAvatar 
                className="avatar" 
                style={{fontSize: "250px"}} 
            />
            <div className="player-info">
                <p className="points">0 PTS</p>
                <p className="name">{name}</p>
                <p className="guess-holder">Guessed: 
                    <span className="guess"> placeholder</span>
                </p>
            </div>
        </StyledPlayer>
    );
    
}


export default Player