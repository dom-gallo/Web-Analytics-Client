import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Dashboard = (props) => {
    const [authToken, setAuthToken] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        console.log("useEffect in dashboard ran");
        if (localStorage.getItem("authToken" === null || localStorage.getItem("authToken") === "" || authToken === null || authToken === "")){
            navigate("/login");
        }
        setAuthToken(localStorage.getItem("authToken"));
    })
    return (
        <>
            <h1>Dashboard Component</h1>
            <p>Auth token is = {authToken}</p>
        </>
    );
}

export default Dashboard;