import styled from 'styled-components';
import { Modal } from "antd";

export const Container = styled.div`
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
        top: 200px;


        h1 { 
            width: 120%;
            color: #9CF4E4;
            margin: 0;
            padding-left: 13%;
            font-size: 4rem;
            text-shadow: #3E625B 0px 5px;
        }

        p { 
            color: #FFF;
            text-align: center;
            width: 600px;
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

export const StyledModal = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 1.5rem;
    padding: 2rem;
    /* min-height: 500px; */

    &.hidden {
        display: none;
    }

    .ant-modal-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .ant-modal-close {
            align-self: flex-end;
            cursor: pointer;

            &:hover {
                background-color: #9CF4E4;
            }
        }

        .ant-modal-body {
            display: flex;
            align-items: center;
            padding: 1rem 0;
            font-size: 2rem;

            .ant-input {
                margin: 0 1rem;
            }
        }

        .ant-modal-footer {
            margin-top: 50px;
            width: 100%;
            display: flex;
            justify-content: center;

            .feature-button:hover {
                background-color: #533B53 !important;

                .text {
                    color: #9CF4E4 !important;
                }

                .shadow {
                    background-color: #9CF4E4 !important;
                }
            }
        }
    }

    .ant-modal-close {
        background-color: transparent;
        border: none;
        background-color: #533B53;
        padding: 5px;
        border-radius: 50%;

        svg {
            color: white;
            font-size: 1.5rem;
        }
    }
`;