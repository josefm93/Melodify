import React from 'react';
import CustomAvatar from "../CustomAvatar"
import StyledPlayer from "./styled"

const Player = ({
    name,
    avatar=0,
    points,
    guessedCorrectly,
    guess
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
                {
                    guessedCorrectly ?
                    <p className="guess-holder"><strong style={{fontFamily: "gothamBody"}}>🎉 Guessed it! 🎉</strong>
                    </p>
                    :                 <p className="guess-holder">Guessed: 
                    <span className="guess"> <strong style={{fontFamily: "gothamBody"}}>{guess}</strong></span>
                </p>
                }

            </div>
        </StyledPlayer>
    );
    
}


export default Player