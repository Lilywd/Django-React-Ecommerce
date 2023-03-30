import React,{useState, useContext} from 'react'
import styled from "styled-components";
import {mobile} from "../responsive";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

const Container = styled.div`

  
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

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });
    const signin = useContext(AppContext).signin
    const navigate = useNavigate()
    const { email, password } = formData;
  
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = e => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(formData),
            redirect: 'follow'
          };

        fetch("http://127.0.0.1:8000/api/v1/jwt/create",requestOptions)
    
    .then(res => {
      if (!res.ok){
        throw Error(res)
      }
        return res.json()
    })
    .then(result =>{
    //   setIsLoading(false)
    //   toast.success("Login Successful", {
    //     position:"top-right"})
        signin(result)
        navigate("/", {replace: true})
    })
    .catch((err) =>{
        console.log(err)
    //   setIsLoading(false)
    //   toast.error("Invalid Credentials", {
    //   position:"top-right"

    // })
    })
    }
    return (
        <Container>
          <Wrapper>
            <Title>SIGN IN</Title>
            <Form onSubmit={e => onSubmit(e)}>
              
              <Input placeholder="Email" type="email" name ="email" value= {email} onChange={e => onChange(e)} required/>
              <Input placeholder="Password" type="password" name ="password" value= {password}  minLength='6' onChange={e => onChange(e)} required/>
             
             
              <button type='submit'>Login</button>
              
            </Form>
             
          </Wrapper>
        </Container>
      );
    };
    


export default Login