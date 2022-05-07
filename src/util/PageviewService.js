
class PageviewService {

    constructor(authToken) {
        this.pageviewURL = "http://localhost:8080/api/v1/pageview"
        this.authToken = authToken;
        this.navigate = Navigator;
    }
    setAuthToken = (token) => {
        this.authToken = token;
    }
    getAll = () =>
    {
        // this.authToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcHB1c2VyMkBnbWFpbC5jb20iLCJUZXN0Q2xhaW0iOiJIZWxsb1dvcmxkIiwiZXhwIjoxNjUxODc4ODc5fQ.CQv6jXKnBPW8FwPDKSp_dH6uV8MhcyhTq5Bm-Oiri2FrCTpuAslJGL-f5mn5lEdtSd5jDui8wdhXDibb7xbY6w"

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
           const response = await fetch(`${this.pageviewURL}/all`, options);
           if(response.status === 403){
               console.log("No longer authorized. Please relogin");
               localStorage.clear();
               navigator("/login");
           }
           const body = await response.json();
           resolve(body);
        });
    }
}

export default PageviewService;