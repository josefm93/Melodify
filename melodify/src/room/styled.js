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
    display: flex;
    flex-direction: column;

    /* lobby and categories */

    .categories {
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: space-between;
    }

    h1, p {
        color: #fff;
    }


    /* tracks */
    .guessing-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: stretch;

        .error-message {
            font-size: 2rem;
            color: white;
            padding-bottom: 2rem;
        }

        input {
            background-color: transparent;
            color: white;
            padding-left: 2rem;
            
            ::placeholder {
                color: white;
                font-family: GothamLight;
            }
        }

        .feature-button {
            margin-top: 2rem;
            margin-bottom: 10px;
            width: 100% !important;
            color: white;

            &:hover {
                background-color: white !important;
            }
        }
    }

    .win-text {
        font-size: 5rem;
        color: white;
        font-weight: bold;
        text-align: center;
        flex: 1;
        margin-top: 10rem;
    }
`;
