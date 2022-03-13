import { useState, useEffect } from 'react';
import { Container, Left, Right } from './styled';

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
            <span>Player component goes here</span>
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
                </div>
            </Left>
            <Right>
                Right
            </Right>
        </Container>
    );
}


export default Room