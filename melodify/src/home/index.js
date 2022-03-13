
import Container from  "./styled.js"
import FeatureButton from "../components/button"

const Home = () => {

    return (
        <Container>
            <h1>One two three.</h1>
            <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime.</p>
            <FeatureButton
                text="Let's Gooo"
                width="300px"
            />
        </Container>
    )
}


export default Home