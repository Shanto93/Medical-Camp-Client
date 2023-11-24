import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../shared/Footer";
import NavBar from "../../shared/NavBar";


const Main = () => {
    const location = useLocation();
    const noFooter =  location.pathname.includes('login');
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {
                noFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Main;