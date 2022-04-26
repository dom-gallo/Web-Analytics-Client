import {useState} from "react";
import AuthenticationManager from "../util/AuthenticationManager";
const Login = (props) => {
    const [AppUserEmail, setAppUserEmail] = useState("");
    const [AppUserPassword, setAppUserPassword] = useState("");

    const handeleLoginSubmit = (event) => {
        let authManager = new AuthenticationManager();
        event.preventDefault();
        console.log(`Logging in with emailAddress=${AppUserEmail} and password=${AppUserPassword}`);

        try{
            console.log("Calling doLogin");
            const authJWT = authManager.doLogin(AppUserEmail, AppUserPassword);
            if(authJWT === null || authJWT === "") {
                console.log("No token was returned");
                return;
            }
            localStorage.setItem("authToken", authJWT);
            console.log("Just set token")
            console.log(localStorage.getItem("authToken"));
        } catch (e) {
            alert(e);
        }

    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                             className="w-20 h-20 text-blue-600" fill="none"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                    <form action="" onSubmit={(event) => {handeleLoginSubmit(event)}}>
                        <div className="mt-4">
                            <div>
                                <label className="block" htmlFor="email">Email</label>
                                    <input type="text" placeholder="Email"
                                           value={AppUserEmail}
                                           onChange={(e) => {setAppUserEmail(e.target.value)}}
                                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                    {/*<span className="text-xs tracking-wide text-red-600">Email field is required </span>*/}
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                    <input type="password" placeholder="Password"
                                           value={AppUserPassword}
                                           onChange={(event => {setAppUserPassword(event.target.value)})}
                                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button
                                    // onClick={handeleLoginSubmit}
                                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login
                                </button>
                                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;