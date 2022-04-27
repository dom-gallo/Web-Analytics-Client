

class AuthenticationManager {


    constructor() {
        this.loginUrl = "http://localhost:8080/login";
    }

    // returns a JWT
    // TODO:
    // Check for response codes

    doLogin = (emailAddress, password) =>{
        return new Promise(async resolve => {
            const options = {
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
            // let authToken = ``;
            const response = await fetch(this.loginUrl, options);
            const body = await response.json();
            console.log(body);
            resolve(body.token);
        });
    }
}
// const options = {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify({emailAddress: emailAddress, password: password})
// };
export default AuthenticationManager;