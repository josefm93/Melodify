import { useState, useEffect, useContext, useCallback } from 'react';
import { Container, Left, Right } from './styled';
import Track from './track';
import Timer from './timer';
import Input from '../components/input';
import FeatureButton from '../components/button';
import {SocketContext} from '../context/socket.js';

import Player from "../components/player"

const Room = () => {
    const socket = useContext(SocketContext);

    const TIME_PER_ROUND = 30;

    const [status, setStatus] = useState("STARTED");
    const [round, setRound] = useState(1);
    const [category, setCategory] = useState(null);
    const [players, setPlayers] = useState([]);
    const [track, setTrack] = useState({});
    const [timeLeft, setTimeLeft] = useState(TIME_PER_ROUND);
    const [guessedCorrectly, setGuessedCorrectly] = useState(false);

    let avatars = [];

    useEffect(() => {
        // TODO: @Andy socket calls
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

        socket.on("newPlayer", (newPlayersList) => {
            console.log("response from newPlayer", newPlayersList);
            setPlayers(newPlayersList)
        });

        // Set avatars
        if (avatars.length < players.length) {
            for (let i = avatars.length - 1; i < players.length; i++) {
                avatars.push(Math.floor(Math.random * 11));
            }
        }
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

    useEffect(() => {
        if (status === "STARTED") {
            // TODO: Set track
            handleStartRound({});
        }
    }, [status]);

    const handleStartRound = (track) => {
        setTimeLeft(TIME_PER_ROUND)
        setGuessedCorrectly(false);
        setTrack(track);
    }

    const renderPlayers = (players) => {
        let i = 0;
        return players.map((player) => (
            <Player 
                key={player.name}
                name={player.name}
                avatar={avatars[++i]}
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
                            <Track
                                timeLeft={timeLeft}
                            />
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