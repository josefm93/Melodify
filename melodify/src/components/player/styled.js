import styled from 'styled-components';

const StyledPlayer = styled.div`

    display: flex;
    flex-direction: row;
    background-color: "red";
    margin-bottom: 30px;

    .avatar {
    }

    .player-info {
        font-family: "GothamLight";
        .points {
            margin: 0;
            padding: 0;
        }
        
        .name {
            margin: 0;
            padding: 0;
            font-family: "GothamTitle";
        }
        .guess-holder {
            margin: 0;
            padding: 0;

            .guess {

            }
        }
    }
`

export default StyledPlayer