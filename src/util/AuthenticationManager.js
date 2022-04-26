

class AuthenticationManager {


    constructor() {
        this.loginUrl = "http://localhost:8080/login";
    }

    // returns a JWT
    // TODO:
    // Check for response codes

    doLogin = (emailAddress, password) => {
        let authToken = "";
        console.log(`Email: ${emailAddress}\n Password: ${password}`)
        const data = {
                emailAddress: emailAddress,
                password: password
            },

            options = {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify({emailAddress: emailAddress, password: password})
            };
        fetch(this.loginUrl, options)
            .then(data => {
                return data.json();
            }).then((parsedData) => {
                console.log(parsedData.token);
                if(parsedData.token != "" || parsedData.token === null){
                    authToken = parsedData.token;
                }
        })
        return authToken;
    }
}

export default AuthenticationManager;