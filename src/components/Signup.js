import {useState} from "react";

const Signup = (props) => {

    const [user, setUSer] = useState({emailAddress: "", password: "", passwordConfirm: ""});

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
                    <h3 className="text-2xl font-bold text-center">Sign up</h3>
                    <form action="" onSubmit={(event) => {
                        event.preventDefault();
                        console.log("Signup button pressed");
                    }}>
                        <div className="mt-4">
                            <div className="mt-4">
                                <label htmlFor="email" className="block">Email</label>
                                <input type="text" placeholder={"Email"}
                                       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="block" className="block">Password</label>
                                <input type="password" placeholder="Password"
                                       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="block" className="block">Confirm Password</label>
                                <input type="password" placeholder="Confirm your password"
                                       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"                                />
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button
                                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Continue
                                </button>
                                <a onClick={(event => {
                                    console.log("Navigate to /login")
                                })} href="#" className=" px-2 text-sm text-blue-600 hover:underline"> Already have an account?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Signup;