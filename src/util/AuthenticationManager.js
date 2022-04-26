

class AuthenticationManager{


    constructor() {
        this.loginUrl = "http://localhost:8080/login";
    }

    // returns a JWT
    doLogin = (emailAddress, password) => {
        console.log(`Email: ${emailAddress}\n Password: ${password}`)
        const data = {
            emailAddress : emailAddress,
            password : password
        },

        options = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers : {
                "Content-Type" : "application/json"
            },
            redirect: "follow",
            referrerPolicy : "no-referrer",
            body: JSON.stringify({emailAddress : emailAddress, password: password})
        };
        fetch(this.loginUrl,options)
            .then(response => {
                console.log("Response from server below ---")
                console.log("response headers");
                console.log(response.headers.get("Connection"));
            }).then((result) => {
                console.log("Result headers")
                console.log(result)
        },
            (error) => {
                // just alert the error;
                console.log(error);
                alert(error);
            });
    }
}

export default AuthenticationManager;