import { useState, useEffect } from 'react';
import { Container } from './styled';

const Track = ({
        timeLeft=30,
        category="Rock",
        albumCoverURL="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.canadianlutheran.ca%2Fwp-content%2Fuploads%2F2011%2F02%2Fjustin-bieber-baby.jpg&f=1&nofb=1",
        title="Baby",
        artist="Justin Bieber (ft. Ludacris)"
    }) => {
        const [blur, setBlur] = useState(2);
        const [blurTitle, setBlurTitle] = useState(4.5);

        useEffect(() => {
            setBlur(((timeLeft/30)*2));
            setBlurTitle(((timeLeft/30)*4.5));
        }, [timeLeft]);

    return (
        <Container>
            <div className="album-cover" style={{filter: `blur(${blur}rem)`}}>
                <img src={albumCoverURL} alt={title}/>
            </div>
            <div className="text">
                <span className="category">Category: <strong>{category}</strong></span>
                <span className="title" style={{filter: `blur(${blurTitle}rem)`}}>{title}</span>
                <span className="artist">by <strong style={{filter: `blur(${blur}rem)`}}>{artist}</strong></span>
            </div>
        </Container>
    );
}


export default Track;