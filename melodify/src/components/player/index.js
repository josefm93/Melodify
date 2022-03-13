import React from 'react';
import CustomAvatar from "../CustomAvatar"
import StyledPlayer from "./styled"

const Player = ({
    name,
    avatar=0,
    points
}) => {

    return (
        <StyledPlayer>
            <CustomAvatar 
                className="avatar"
                index={avatar}
            />
            <div className="player-info">
                <p className="points">{points} PTS</p>
                <p className="name">{name}</p>
                <p className="guess-holder">Guessed: 
                    <span className="guess"> placeholder</span>
                </p>
            </div>
        </StyledPlayer>
    );
    
}


export default Player