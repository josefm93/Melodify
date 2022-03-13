import { useState, useEffect } from 'react';
import { Container } from './styled';

const Track = ({
        blur=0,
        category="Rock",
        albumCoverURL="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.canadianlutheran.ca%2Fwp-content%2Fuploads%2F2011%2F02%2Fjustin-bieber-baby.jpg&f=1&nofb=1",
        title="Baby",
        artist="Justin Bieber (ft. Ludacris)"
    }) => {
    return (
        <Container>
            <div className="album-cover">
                <img src={albumCoverURL} alt={title}/>
            </div>
            <div className="text">
                <span className="category">Category: <strong>{category}</strong></span>
                <span className="title">{title}</span>
                <span className="artist">by <strong>{artist}</strong></span>
            </div>
        </Container>
    );
}


export default Track;