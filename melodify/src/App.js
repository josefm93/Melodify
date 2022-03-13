import logo from './assets/logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { socket, SocketContext } from './context/socket';

import Room from "./room/index.js"
import Home from "./home/index.js"

function App() {
  return (
    <SocketContext.Provider  value={socket}>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/room">Room</Link>
            </li>

          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/room" element={<Room/>}/>
        </Routes>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
