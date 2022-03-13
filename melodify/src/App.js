import logo from './assets/logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Room from "./room/index.js"

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Room</Link>
            </li>
          </ul>
        </nav>

        <Routes>

          <Route path="/" element={<Room/>}/>
        </Routes>
      </div>
  );
}

export default App;
