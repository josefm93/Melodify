import styled from 'styled-components';

const StyledPlayer = styled.div`

    display: flex;
    flex-direction: row;
    background-color: "red";
    margin-bottom: 30px;

    .anticon {
        font-size: 4rem !important;
    }

    .player-info {
        font-family: "GothamLight";
        margin-left: 1rem;
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