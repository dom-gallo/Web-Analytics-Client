

class AuthenticationManager{


    constructor() {
        this.loginUrl = "http://localhost:8080/login";
    }
    // returns a JWT
    doLogin = (emailAddress, password) => {
        fetch(this.loginUrl)
            .then(response => {
                console.log("Response from server below ---")
                console.log(response);
                response.json();
            }).then((result) => {
                //  This should be the JWT
                return result;
        },
            (error) => {
                // just alert the error;
                console.log(error);
                alert(error);
            });
    }
}

export default AuthenticationManager;