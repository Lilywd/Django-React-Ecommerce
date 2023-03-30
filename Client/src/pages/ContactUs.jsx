import React,{useState, useContext, useEffect} from 'react'
import { AppContext } from '../App';
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
;
import {mobile} from "../responsive";
import styled from "styled-components";

const Container = styled.div`

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
const Load = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
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
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;



const ContactUs = () => {

const navigate = useNavigate()
const submitMessage = () => toast.success("message sent", {
    position:"top-right"
})
  const [formData, setFormData] = useState({
      name: '',
      email: '' ,
      message: '' ,
      
  });
  


  const { name, email,message } = formData;
  const contactSubmit = e => {
    e.preventDefault();
   submitMessage()
   navigate('/')
  } 


 

 
  return (
    <Container>
      <Wrapper>
        <Title>ContactUs</Title>
        <Form  onSubmit= {contactSubmit} >
            <Input placeholder="name" type="text" name ="name" required/>
            <Input placeholder="Email" type="email" name ="email" required/>
            <textarea placeholder="Message" name ="message" required/>
            <Button type='submit'> ContactUs NOW</Button>
            
              
          
        </Form>
          
      </Wrapper>
    </Container>
  );
};
export default ContactUs