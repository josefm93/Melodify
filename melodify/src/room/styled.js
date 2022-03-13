import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    padding: 2rem;
`;

export const Left = styled.div`
    flex: 1;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;

    .round-indicator {
        color: white;
        text-transform: uppercase;
        font-family: GothamLight;
        font-size: 2rem;
        margin-bottom: 1rem;
        text-align: center;

        strong {
            font-family: GothamBody;
        }
    }

    .players-container {
        position: relative;
        flex: 1;
        padding: 2rem;
        background-color: white;
        border-radius: 1.5rem;
        margin-left: 10px;

        .shadow {
            position: absolute;
            top: 0;
            left: -10px;
            bottom: 0;
            background-color: #533B53;
            z-index: -1;
            margin-left: 0;
        }
    }
`;

export const Right = styled.div`
    flex: 3;
`;
