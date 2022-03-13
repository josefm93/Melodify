import { useState, useEffect } from 'react';
import { Container, Left, Right } from './styled';
import Track from './track';
import Timer from './timer';
import Input from '../components/input';
import FeatureButton from '../components/button';

import Player from "../components/player"

const Room = () => {
    const [status, setStatus] = useState("WAITING");
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
                {
                    status === "WAITING"
                        ? <span>Lobby</span>
                        : <>
                            <Track/>
                            <Timer/>
                            <div className="guessing-area">
                                <Input
                                    borderColour="#AF96C3"
                                    placeholder="Guess the song..."
                                />
                                <FeatureButton
                                    text="Let's Gooo"
                                />
                            </div>
                        </>
                }
            </Right>
        </Container>
    );
}


export default Room