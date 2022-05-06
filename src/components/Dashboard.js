import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import PageviewService from "../util/PageviewService";

const Dashboard = (props) => {
    const [authToken, setAuthToken] = useState("")
    const navigate = useNavigate();


    useEffect(() => {
        console.log("useEffect in dashboard ran");
        if (localStorage.getItem("authToken") == null || localStorage.getItem("authToken") == "") {
            return navigate("/login");
        }

        const token = localStorage.getItem("authToken")

        setAuthToken(token);

        let pageviewService = new PageviewService();
        async function fetchData(t) {
            pageviewService.setAuthToken(t)
            console.log("Setting authtoken for pageview service to:" + authToken)
            const data = await pageviewService.getAll();
            console.log(data)
        }
        fetchData(token);
    }, []);

    // useEffect( () => {
    //     if(PageviewService.authToken != null || PageviewService.authToken != ''){
    //
    //     }
    // })
    return (
        <>
            <h1>Dashboard Component</h1>
            <p>Auth token is = {authToken}</p>
        </>
    );
}

export default Dashboard;