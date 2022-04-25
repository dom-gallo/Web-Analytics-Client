import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Dashboard = (props) => {

    const navigate = useNavigate();
    useEffect(() => {
        if (props.authToken == null || props.authToken == "" || localStorage.getItem("authToken" == null || localStorage.getItem("authToken") =="")){
            navigate("/login");
        }
    })
    return (
        <>
            <h1>Dashboard Component</h1>
            <p>Auth token is = {props.authToken}</p>
        </>
    );
}

export default Dashboard;