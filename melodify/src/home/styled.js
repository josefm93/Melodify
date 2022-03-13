import styled from 'styled-components';

const Container = styled.div`
    flex: 1;

    .content {
        position: absolute;
        left: 50%;
        bottom: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        margin: 0 auto;


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

        .feature-button {
            margin-top: 50px;

            &:hover {
                background-color: #9CF4E4 !important
            }
        }
    }
    .background {
        position: absolute;
        bottom: 0;

        &.right {
            right: 0;
        }
    }
`;

export default Container;