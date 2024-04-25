// Login.js
// A login page (users login with email and password)

import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../apiConfig.js';

export const setAuthToken = token => {
  if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else
      delete axios.defaults.headers.common["Authorization"];
}

const Login = () => {

  const handleSubmit = (email, pass) => {
    //TESTING
    //registered sample user from https://reqres.in/
    //const loginPayload = {
    //  email: 'eve.holt@reqres.in',
    //  password: 'cityslicka'
    //}
  
    axios.post(`${API_BASE_URL}login`) //, loginPayload)
      .then(response => {
        //get token from response
        const token  =  response.data.token;
  
        //set JWT token to local
        localStorage.setItem("token", token);
  
        //set token to axios common header
        setAuthToken(token);
  
      //redirect user to home page
        window.location.href = '/'
      })
      .catch(err => console.log(err));
  };

  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
     setAuthToken(token);
  }
 

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <div className="d-flex flex-column align-items-center mt-3">
        <input type="text" className="mb-3" placeholder="Username" />
        <input type="password" className="mb-3" placeholder="Password" />
        <button type="submit">Login</button>
      </div>
      <h1>Don't have a login? Then Sign Up!</h1>
    </div>
  );
};

export default Login;