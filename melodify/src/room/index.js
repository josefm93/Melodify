import { useState, useEffect } from 'react';
import { Container, Left, Right } from './styled';
import Track from './track';
import Timer from './timer';

const Room = () => {
    const [round, setRound] = useState(1);
    const [category, setCategory] = useState(null);
    const [players, setPlayers] = useState([]);
    const [track, setTrack] = useState({});
    const [timeLeft, setTimeLeft] = useState(30);

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
                    <div className="players-container shadow"></div>
                </div>
            </Left>
            <Right>
                <Track/>
                <Timer/>
            </Right>
        </Container>
    );
}


export default Room