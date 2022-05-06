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
        setAuthToken(localStorage.getItem("authToken"));
        let pageviewService = new PageviewService();

        console.log("Getting pageviews")
        async function fetchData() {
            pageviewService.setAuthToken(authToken)
            const data = await pageviewService.getAll();
            console.log(data)
        }
        fetchData();
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