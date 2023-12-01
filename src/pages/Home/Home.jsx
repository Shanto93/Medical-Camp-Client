import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices";
import PopularCamps from "./PopularCamps/PopularCamps";
import { Helmet } from 'react-helmet-async';
import Workshop from "./Workshop/Workshop";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediCamp Care | Home </title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <Workshop></Workshop>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;