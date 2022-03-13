import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
    .progress-bar {
        flex: 1;
        margin-right: 1rem;
        height: 0.5rem;
        width: 100%;
        position: relative;
        border-radius: 0.5rem;
        background-color: #AF96C3;

        .remaining {
            position: absolute;
            background-color: #9CF4E4;
            height: 0.5rem;
        }
    }

    .time-left {
        padding: 0.5rem;
        font-size: 2rem;
        font-weight: bold;
        color: #9CF4E4;
        background-color: #533B53;
        border-radius: 50%;
        width: 45px;
        height: 40px;
        text-align: center;
    }
`;