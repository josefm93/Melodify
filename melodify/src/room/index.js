import { useState, useEffect } from 'react';
import { Container, Left, Right } from './styled';

import Player from "../components/player"

const Room = () => {
    const [round, setRound] = useState(1);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // TODO: Handle socket calls when game updates
        const samplePlayerArray = [
            {
                name: 'One',
                points: 10,
                guess: {
                    value: 'Test',
                    correct: true,
                }
            }
        ];
        setPlayers(samplePlayerArray);
    }, []);


    const renderPlayers = (players) => {
        console.log('hi!');
        return players.map((player) => (
            <Player 
                key={player.name}
                name={player.name}
            />
        ));
    }

    return (
        <Container>
            <Left>
                <span className="round-indicator">
                    <strong>Round {round}</strong> / 5
                </span>
                <div className="players-container">
                    {renderPlayers(players)}
                    <div className="players-container shadow"></div>
                </div>
            </Left>
            <Right>
                Right
            </Right>
        </Container>
    );
}


export default Room