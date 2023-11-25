import Banner from "./Banner/Banner";
import PopularCamps from "./PopularCamps/PopularCamps";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediCamp Care | Home </title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
        </div>
    );
};

export default Home;