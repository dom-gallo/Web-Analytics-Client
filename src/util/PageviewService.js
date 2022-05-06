class PageviewService {

    constructor(authToken) {
        this.pageviewURL = "http://localhost:8080/api/v1/pageview"
        this.authToken = authToken;
    }
    setAuthToken = (token) => {
        this.authToken = token;
    }
    getAll = () =>
    {
        return new Promise( async resolve =>{
           const options = {
               method:"GET",
               mode: "cors",
               cache: "no-cache",
               headers: {
                   "Content-Type": "application/json",
                   "Authorization" : this.authToken
               },
               redirect: "follow",
               referrerPolicy: "no-referrer"
           };
           const response = await fetch(`${this.pageviewURL}/all`);
           const body = await response.json();
           resolve(body);
        });
    }
}

export default PageviewService;