import axios from "axios";
import jwt_decode from "jwt-decode";





export default async function login({ email, password }) {


  
  var qs = require("qs");





  var config = {



    method: "post",



    url: "http://localhost:9091/login",



    headers: {



      "Content-Type": "application/x-www-form-urlencoded",



    },
    data: qs.stringify({



        email,
  
  
  
        password,
  
  
  
      }),
  
  
  
    };
  
  
  
    return axios(config)
  
  
  
      .then((response) =>       {
  
      sessionStorage.setItem("accessToken", response.data.access_token)
  
      sessionStorage.setItem("refreshToken", response.data.refresh_token)
      // console.log(response)
      
      const decoded = jwt_decode(response.data.access_token);
      const email =  decoded.sub;
      const name = email.substr(0, email.indexOf('@'))
      sessionStorage.setItem("userName", name)
      
      
  
    }  )
  
  
  
      .catch((err) => {
  
  
  
        if (err.response.status === 403) {
  
  
  
          alert("The email and the password do not match");
  
  
  
        }else{
  
  
  
          throw new Error();
  
  
  
        }
  
  
  
      });
  
  
  
  }