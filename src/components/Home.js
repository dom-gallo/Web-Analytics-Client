import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Navbar from "./Navbar";
const Home = (props) => {

    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("authToken")){
            navigate("/dashboard");
        }
    })
    return (
        <>
            <div>
                <Navbar />
            </div>
            Home Page
        </>
    );
}

export default Home;