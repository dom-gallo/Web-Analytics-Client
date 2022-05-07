import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import PageviewService from "../util/PageviewService";

import DashboardNavigation from "./DashboardNavigation";
import LineChart from "./LineChart";
const Dashboard = (props) => {
    const [authToken, setAuthToken] = useState("")
    const navigate = useNavigate();
    const [expand, setExpand] = useState(true);
    const [pageviewData, setPageviewData] = useState([]);
    const [chartItems, setChartItems] = useState({});
    const [chartLabels, setChartLabels] = useState([]);
    const [chartViews, setChartViews] = useState([]);
    const [todayDateChartLabel, setTodayDateChartLabel] = useState('');
    useEffect(() => {
        console.log("useEffect in dashboard ran");
        if (localStorage.getItem("authToken") === null || localStorage.getItem("authToken") === "") {
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
            setPageviewData(data);
        }
        fetchData(token);
        let c = parseDataToChart();
        setChartItems(c);
        console.log("Chart items")
        let labels = []
        let views = []
        for( const [date, dateData] of Object.entries(c)){
            setTodayDateChartLabel(date);
            for(const pageview of dateData){
                // console.log(pageview.resource)
                labels.push(pageview.resource)
                views.push(pageview.views)
            }
        }
        setChartLabels(labels);
        setChartViews(views);
    }, []);

    function parseDataToChart(){
        let chartItems = {}

        pageviewData.forEach(pv => {
            const d = new Date(pv.viewedAt);
            const dString = `${d.getMonth()}/${d.getDay()}`;
            const resourceConsumed = pv.url_viewed;
            /*
            * For every pageview, check if chartItems has the date as a key.
            * if there is no key in object as date, add it.
            *
            * */
            if(chartItems[dString] != null){
                console.log("Key exists")
                for(let i = 0; i < chartItems[dString].length; i++){
                    var currentObj = chartItems[dString][i];
                    if(chartItems[dString][i].resource.valueOf() == resourceConsumed){
                        console.log("Current obj resource = " + currentObj.resource.valueOf() + " current pageview resource = " + resourceConsumed);
                        currentObj.views +=1;
                    } else {
                        console.log("current pageview resource: " + resourceConsumed + " does not exist in chartItems");
                        chartItems[dString].push({resource: resourceConsumed, views: 1});
                    }
                    break;
                }
            } else {
               chartItems[dString] = [];
               chartItems[dString].push({resource: resourceConsumed, views: 1});
            }

        })
        // console.log(chartItems);
        return chartItems;
    }

    return (
        <div className={"flex"}>
            <DashboardNavigation expand={expand} setExpand={setExpand} />
            <div className={"flex-1 flex-col h-screen p-7 text-2xl font-semibold bg-cyan-50 text-black"}>
                <span> </span>
                <div className={`chart w-2/5 `}>
                    <LineChart labels={chartLabels} label={`Views for ${todayDateChartLabel}`} data={chartViews}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;