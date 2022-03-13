import { useState, useEffect } from 'react';
import { Container, Left, Right } from './styled';
import Track from './track';
import Timer from './timer';
import Input from '../components/input';
import FeatureButton from '../components/button';

import Player from "../components/player"

const Room = () => {
    const TIME_PER_ROUND = 30;

    const [status, setStatus] = useState("STARTED");
    const [round, setRound] = useState(1);
    const [category, setCategory] = useState(null);
    const [players, setPlayers] = useState([]);
    const [track, setTrack] = useState({});
    const [timeLeft, setTimeLeft] = useState(TIME_PER_ROUND);
    const [guessedCorrectly, setGuessedCorrectly] = useState(false);

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

    useEffect(() => {
        let interval = null;
        if (timeLeft !==0) {
          interval = setInterval(() => {
            setTimeLeft(time => time - 1);
          }, 1000);
        } else {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timeLeft]);

    const handleStartRound = () => {
        setTimeLeft(TIME_PER_ROUND)
        setGuessedCorrectly(false);
    }


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
                            <Timer
                                maxTime={TIME_PER_ROUND}
                                timeLeft={timeLeft}
                            />
                            {!guessedCorrectly
                                ?    <div className="guessing-area">
                                    <Input
                                        borderColour="#AF96C3"
                                        placeholder="Guess the song..."
                                    />
                                    <FeatureButton
                                        text="Let's Gooo"
                                    />
                                </div>
                                : <span className="win-text">You got it!</span>
                            }

                        </>
                }
            </Right>
        </Container>
    );
}


export default Room