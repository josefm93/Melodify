
import Container from  "./styled.js";
import FeatureButton from "../components/button";
import backgroundLeft from "../assets/home-page-left.png";
import backgroundRight from "../assets/home-page-right.png";

const Home = () => {

    return (
        <Container>
            <div className="content">
                <h1>One two three.</h1>
                <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime.</p>
                <FeatureButton
                    text="Let's Gooo"
                    width="300px"
                    primaryColour="#FFF"
                />
            </div>
            <img className="background left" src={backgroundLeft} alt="background"/>
            <img className="background right" src={backgroundRight} alt="background"/>
        </Container>
    )
}


export default Home