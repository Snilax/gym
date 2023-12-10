import Hero from '../components/Hero';
import About from '../components/About';
import Classes from '../components/Classes.jsx';
import CarouselItem from "../components/CarouselItems";
import Header from "../components/Header";
import Info from "../components/Info.jsx";
import Price from "../components/Price.jsx";
import Form from "../components/Form.jsx";

function Home() {
    return (<>
        <Header />
        <Hero></Hero>
        <About></About>
        <Classes></Classes>
        <CarouselItem />
        <Info></Info>
        <Price></Price>
        <Form></Form>
    </>);
}

export default Home;
