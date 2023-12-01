import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices";
import PopularCamps from "./PopularCamps/PopularCamps";
import { Helmet } from 'react-helmet-async';
import Workshop from "./Workshop/Workshop";
import Testimonials from "./Testimonials/Testimonials";
import FeedBack from "./FeedBack/FeedBack";


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
            <FeedBack></FeedBack>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;