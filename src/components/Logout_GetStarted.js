const Logout_GetStarted = (props) => {

    if(localStorage.getItem("authToken")){
        return (
            <>
                    <button type="button"
                            onClick={(event) => {
                                event.preventDefault();
                                console.log("Logout pressed");
                            }}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Logout
                    </button>
            </>
        );
    } else {
        return (
            <>
                <button type="button"
                        onClick={(event) => {
                            event.preventDefault();
                            console.log("Get Started pressed");
                        }}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Get Started
                </button>
            </>
        );
    }

}

export default Logout_GetStarted;