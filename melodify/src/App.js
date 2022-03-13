import logo from './assets/logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { socket, SocketContext } from './context/socket';

import Header from './components/header';
import Room from "./room/index.js"
import Home from "./home/index.js"

function App() {
  return (
    <SocketContext.Provider  value={socket}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/room" element={<Room/>}/>
        </Routes>
    </SocketContext.Provider>
  );
}

export default App;
