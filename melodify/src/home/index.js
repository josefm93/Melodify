import Header from "../components/header.js"
import "./index.css"
import PrimaryButton from "../components/primarybutton.js"
import { Button } from 'antd';

const Home = () => {

    return (
        <div className="home">
            <Header />
            <h1>One two three.</h1>
            <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime.</p>

        </div>
    )
}


export default Home