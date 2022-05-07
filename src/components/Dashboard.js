import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import PageviewService from "../util/PageviewService";
import {dash_home} from "./assets/dash_home";

const Dashboard = (props) => {
    const [authToken, setAuthToken] = useState("")
    const navigate = useNavigate();
    const [expand, setExpand] = useState(true);

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

    const dashboardNavItems = [
        {title : "Dashboard", src: "/assets/dash_home.js"},
        {title : "Account Settings", src: ""},
        {title : "Pretty Graphs", src: "", gap: true},
        {title : "", src: ""},
        {title : "Dashboard", src: ""},
        {title : "Dashboard", src: ""},
        {title : "Dashboard", src: "", gap: true},
        {title : "Dashboard", src: ""},

    ]

    return (
        <div className={"flex"}>
            <div className={`h-screen ${expand ? 'w-72' : 'w-32' } duration-300 bg-blue-600 relative p-5 pt-8`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     onClick={(event) => {setExpand(!expand)}}
                className={`absolute cursor-pointer right-0 top-9 w-7 border-1 border-dark-purple rounded-full fill-amber-50
                ${expand && 'rotate-180'}
                `}>
                    <path d="M6.185 4.843l11.927 7.157-11.927 7.157 2.982-7.157-2.982-7.157zm-4.185-4.843l5 12-5 12 20-12-20-12z"/>
                </svg>
                <div className={`flex gap-x-4 items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer duration-500 h-16 w-16 fill-cyan-200 border-cyan-200 border-1`} fill="none" viewBox="0 0 24 24" stroke="cyan-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!expand && 'hidden'}`}> Vindaloo </h1>
                </div>
                <ul className={`pt-6`}>
                    <li key={0} className={`text-gray-300 text-sm p-4 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:font-bold hover:text-blue-800 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${expand ? `h-8 w-8` : `h-12 w-12`} duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className={`${!expand && `hidden`}`}> Dashboard </span>
                    </li>
                    <li key={1} className={`text-gray-300 text-sm p-4 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:font-bold hover:text-blue-800 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${expand ? `h-8 w-8` : `h-12 w-12`} duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className={`${!expand && `hidden`}`}> Account Settings </span>
                    </li>
                    <div className={`pt-6`}></div>
                    <li key={2} className={`text-gray-300 text-sm p-4 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:font-bold hover:text-blue-800 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${expand ? `h-8 w-8` : `h-12 w-12`} duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className={`${!expand && `hidden`}`}> Charts and Stuff </span>
                    </li>
                    <div className={`pt-10`}> </div>
                        <li key={3} className={`text-gray-300 text-sm p-4 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:font-bold hover:text-blue-800 rounded-md`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`${expand ? `h-8 w-8` : `h-12 w-12`} duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className={`${!expand && `hidden`}`}> Logout </span>
                        </li>
                </ul>
            </div>

            <div className={"flex-1 h-screen p-7 text-2xl font-semibold bg-cyan-50 text-black"}>
                Dashboard Content
            </div>
        </div>
    );
}

export default Dashboard;