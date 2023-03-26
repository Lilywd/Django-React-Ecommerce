import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import styled from "styled-components";
import {mobile} from "../responsive";
import { login } from '../actions/auth';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

const Login = ({login}) => {
  const [formData, setFormData] = useState({
      email: '',
      password: '' 
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
      e.preventDefault();

      login(email, password);

      
  };
  

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={e => onSubmit(e)}>
          
          <Input placeholder="Email" type="email" name ="email" value= {email} onChange={e => onChange(e)} required/>
          <Input placeholder="Password" type="password" name ="password" value= {password}  minLength='6' onChange={e => onChange(e)} required/>
         
         
          <button type='submit'>Login</button>
          
        </Form>
          <Link to ="/reset-pasword">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to ="/register">CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
};

// const mapStateToProps = state => ({
//   // isAuthenticated: state.auth.isAuthenticated
// });

export default connect(null, { login })(Login);