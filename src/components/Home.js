import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Home = (props) => {

    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("authToken")){
            navigate("/dashboard");
        }
    })
    return (
        <>
            Home Page
        </>
    );
}

export default Home;