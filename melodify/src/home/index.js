
import { useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import { Container, StyledModal } from  "./styled.js";
import FeatureButton from "../components/button";
import Input from "../components/input";
import backgroundLeft from "../assets/home-page-left.png";
import backgroundRight from "../assets/home-page-right.png";
import CustomAvatar from '../components/CustomAvatar/index.js';
import {SocketContext} from '../context/socket.js';


const Home = () => {
    const socket = useContext(SocketContext);
    const [name, setName] = useState("");

    const establishConnection = useCallback(() => {
        socket.emit("connection");
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const handleCreateRoom = () => {
          socket.emit("createRoom", name);
          navigate("/room");
      };

      const handleNameChange = (e) => {
        setName(e.target.value); 
      }


    const navigate = useNavigate()

    return (
        <Container>
            <div className="content">
                <h1>Knowledge is everything.</h1>
                <p>Test your musical knowledge with a few of your buddies and see who comes out on top!</p>
                <FeatureButton
                    text="Let's Gooo"
                    width="300px"
                    primaryColour="#FFF"
                    onClick={showModal}
                />
            </div>
            <StyledModal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                className={isModalVisible ? "visible" : "hidden"}
                footer={(

                    <FeatureButton
                        text="Create Room"
                        primaryColour="#9CF4E4"
                        secondaryColour="#3E625B"
                        width="300px"
                        onClick={handleCreateRoom}
                    />
                )}
            >
                <div className="avatar-and-welcome">
                    <CustomAvatar />
                    
                    <span>                Hey there,
                    <Input
                        placeholder="Enter Name"
                        onChange={handleNameChange}
                    /> !</span>

                </div>
            </StyledModal>
            <img className="background left" src={backgroundLeft} alt="background"/>
            <img className="background right" src={backgroundRight} alt="background"/>
        </Container>
    )
}


export default Home