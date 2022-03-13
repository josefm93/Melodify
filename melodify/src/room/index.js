import { useState, useEffect, useContext, useCallback } from 'react';
import { Container, Left, Right } from './styled';
import Track from './track';
import Timer from './timer';
import Input from '../components/input';
import FeatureButton from '../components/button';
import {SocketContext} from '../context/socket.js';
import { AutoComplete, message } from 'antd';

import Player from "../components/player"
import Category from "../components/category"

const Room = () => {
    const socket = useContext(SocketContext);

    const TIME_PER_ROUND = 30;

    const [status, setStatus] = useState("WAITING");
    const [round, setRound] = useState(1);
    const [categories, setCategories] = useState([]);
    const [players, setPlayers] = useState([]);
    const [track, setTrack] = useState({});
    const [timeLeft, setTimeLeft] = useState(TIME_PER_ROUND);
    const [guess, setGuess] = useState("");
    const [guessedCorrectly, setGuessedCorrectly] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    let avatars = [];


    const link = "http://melodify.app/room?=zQ6Qt1pTnLM"

    useEffect(() => {
        // TODO: @Andy socket calls
        const samplePlayerArray = [
            {
                name: 'Half Dolla (You)',
                points: 0,
                guess: {
                    value: '',
                    correct: false,
                }
            },
            {
                name: 'The Game',
                points: 0,
                guess: {
                    value: '',
                    correct: false,
                }
            },
            {
                name: '2 Chainz',
                points: 0,
                guess: {
                    value: '',
                    correct: false,
                }
            },
            {
                name: 'Rich Smallies Big',
                points: 0,
                guess: {
                    value: '',
                    correct: false,
                }
            },
        ];

        // socket.on("newPlayer", (newPlayersList) => {
        //     console.log("response from newPlayer", newPlayersList);
        //     setPlayers(newPlayersList)
        // });

        setPlayers(samplePlayerArray);

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
                points={player.points}
                avatar={avatars[++i]}
                guessedCorrectly={player.guess.correct}
                guess={player.guess.value}
            />
        ));
    }

    const handleStartGame = () => {
        setStatus("start gaem")
    }

    const handleUpdateGuess = (e) => {
        setGuess(e.target.value);
    }

    const handleSubmitGuess = () => {
        let newPlayersList = players;
        newPlayersList[0].guess.value = guess;


        if (guess === "baby") {
            setGuessedCorrectly(true);
            setErrorMessage("");
            newPlayersList[0].guess.correct = true;
        } else {
            const errors = ["Oh noooo 😿", "That's not it 🥺", "Try again 😔", "You'll get it eventually 🤡"];
            const index = Math.floor(Math.random() * errors.length);
            setErrorMessage(errors[index]);
        }

        setPlayers(newPlayersList);
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
                    ? 
                    <>
                        <h1>Lobby</h1>
                        <p>Share this link with your friends! 🔗 <a href="#0">{link}</a></p>
                        <h1>Choose a category</h1>
                        <div className="categories">
                            <Category />
                        </div>
                        <div className="start-game" style={{margin: "0 auto"}}>
                        <FeatureButton
                                text="Start Game"
                                onClick={handleStartGame}
                            />
                        </div>
                        
                    </>
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
                                {errorMessage && (
                                    <span class="error-message">{errorMessage}</span>
                                )}
                                <Input
                                    borderColour="#AF96C3"
                                    placeholder="Guess the song..."
                                    onChange={handleUpdateGuess}
                                    onEnter={handleSubmitGuess}
                                />
                                <FeatureButton
                                    text="Let's Gooo"
                                    onClick={handleSubmitGuess}
                                />
                            </div>
                            : <span className="win-text">👶 You got it! 🥳</span>
                        }

                    </>
                }
            </Right>
        </Container>
    );
}


export default Room