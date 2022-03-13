import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Lobby</Link>
            </li>
            <li>
              <Link to="/room">Room</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Lobby/>}/>
          <Route path="/room" element={<Room/>}/>
        </Routes>
      </div>
  );
}

function Room() {
  return <h2>Rooom</h2>;
}

function Lobby() {
  return <h2>Lobby</h2>;
}
export default App;
