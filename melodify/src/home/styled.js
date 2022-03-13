import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2rem;
    flex: 1;

    h1 { 
        color: #9CF4E4;
        margin: 0;
        font-size: 4rem;
        text-shadow: #3E625B 0px 5px;
    }

    p { 
        color: #FFF;
        text-align: center;
        width: 800px;
        font-size: 1.25rem;
    }
`;

export default Container;