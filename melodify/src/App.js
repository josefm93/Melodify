import logo from './assets/logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { socket, SocketContext } from './context/socket';

import Wrapper from "./components/wrapper";
import Room from "./room/index.js"
import Home from "./home/index.js"

function App() {
  return (
    <SocketContext.Provider  value={socket}>
        <Wrapper
          child={(
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/room" element={<Room/>}/>
          </Routes> 
          )}>
        </Wrapper>
    </SocketContext.Provider>
  );
}

export default App;
