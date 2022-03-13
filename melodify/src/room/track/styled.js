import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 2rem;

    a {
        color: #9CF4E4;
    }

    .album-cover {
        margin-right: 2rem;
        img {
            width: 200px;
            height: 200px;
            border-radius: 1rem;
            object-fit: cover;
        }
    }

    .text {
        display:flex;
        flex-direction: column;

        .category {
            text-transform: uppercase;
            color: white;
            font-family: GothamLight;
            font-size: 1.5rem;
            
            strong {
                font-family: GothamBody;
            }
        }

        .title {
            flex: 1;
            font-size: 7rem;
            font-weight: bold;
            color: #9CF4E4;
            display: block;
            line-height: 8rem;
        }

        .artist {
            font-size: 2rem;
            color: white;
            font-family: GothamLight;

            strong {
                font-family: GothamBody;
            }
        }
    }
`;