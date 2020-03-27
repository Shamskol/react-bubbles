import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
    const [credentials, setCredentials] = useState({
    username: "",
    password: ""


    });
   
     const login = e => {
       e.preventDefault();
       axiosWithAuth()
       .post('/api/login', credentials)
         .then(res => {
           localStorage.setItem('token', res.data.token);
           props.history.push('/bubblepage');
         })
         .catch(err =>{
           console.log("Login Error found",err )
         })
     };
   
     const handleChange = e => {
         setCredentials ({
           ...credentials,
           [e.target.name]: e.target.value})
         }
     

  return (
    <DivStyles>
      <h1>Welcome to the Bubble App!</h1>
      
      <form onSubmit={login}>
          <InputStyles
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <InputStyles
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <ButtonStyles>Log in</ButtonStyles>
        </form>


    </DivStyles>
  );
  }
  const DivStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputStyles = styled.input`
  padding: 20px 80px;
  margin: 20px;
  border: 2px solid #F59BAE;
  border-radius: 20px;
`;
const ButtonStyles = styled.button`
  padding: 20px 20px;
  background: #9BF5C5;
  border-radius: 40px;
`;



export default Login;
