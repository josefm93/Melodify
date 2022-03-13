import { useState, useEffect } from 'react';
import { Container } from './styled';

const Timer = ({
        maxTime=30,
        timeLeft=23
    }) => {


    return (
        <Container>
            <div className="progress-bar">
                <span
                    className="progress-bar remaining"
                    style={{width: `${(timeLeft/maxTime) * 100}%`}}
                ></span>
            </div>
            <div className="time-left">{timeLeft}</div>
        </Container>
    );
}


export default Timer;