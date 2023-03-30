import React,{useState, useContext, useEffect} from 'react'
import { AppContext } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';
import {Oval} from 'react-loader-spinner';
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



const Checkout = () => {


  const navigate = useNavigate();

  const inform = () => toast.success("Payment succesful", {
    position:"top-right"
    })

  const [formData, setFormData] = useState({
      first_name: '',
      email: '' ,
      street_address: '' ,
      city: '' ,
      country: '' ,
      state_province: '' ,
      postal_zip_code: '' ,
      
  });
  const [clientToken, setClientToken] = useState(null);
  const [loading,setLoading] = useState(true);
  const [processingOrder,setProcessingOrder]= useState(false);
  const [orderAttempted,setOrderAttempted] =useState(false);
  const [success,setSuccess] = useState(false);
  const [data,setData] = useState({
      instance: {}

  });


  const { first_name, email,street_address,city,country,state_province,postal_zip_code , } = formData;

  useEffect(() =>{
    const url = 'http://localhost:8002/api/payment/generate-token'
              const abortCont = new AbortController();
          // pass second arg to fetch for the sake of abort controller
              fetch(url, { signal: abortCont.signal })
              .then(res => {
              if (!res.ok){
                  throw Error("Resources not found")
              }
              return res.json()
              })
              .then((data) => {
                
                setClientToken(data.token);
                setLoading(false);
                setProcessingOrder(false);
              })
              .catch(() =>{
                  //check for abort error
                  setLoading(false);
              })
      
              //clean up
              return () => abortCont.abort();
      
  },  [])

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value.replace(/\ /g,'') });
  const onAddressChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const formStyling = orderAttempted ?'needs-validation was-validated': 'needs-validation';
  
  

  const buy = async e =>{
    e.preventDefault();
    if (
      first_name !== '' &&
      email !== '' &&
      street_address !== '' &&
      city !== '' &&
      country !== '' &&
      state_province !== '' &&
      postal_zip_code !== ''
    ) {
  
    inform()
    navigate('/');

  // let { nonce } = await data.instance.requestPaymentMethod();

  //     setProcessingOrder(true);

  //     const body = JSON.stringify({
  //         first_name,
  //         email,
  //         street_address,
  //         city,
  //         country,
  //         state_province,
  //         postal_zip_code,
  //         nonce
  //     });
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");

  //     var requestOptions = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: body,
  //       redirect: 'follow'
  //     };
  //     fetch("http://localhost:8002/api/payment/process-payment",requestOptions)
    
  //   .then(res => {
  //     if (!res.ok){
  //       throw Error(res)
  //     }
  //       return res.json()
  //   })
  //   .then(result =>{
  //   //   setIsLoading(false)
  //   //   toast.success("Login Successful", {
  //     setSuccess(true);
  //     setProcessingOrder(false);
  //     redirect ('/thank-you');
  //   })
  //   .catch((err) =>{
  //       console.log(err)
  //       setProcessingOrder(false);
  //   //   setIsLoading(false)
  //   //   toast.error("Invalid Credentials", {
  //   //   position:"top-right"

  //   // })
  //   })
      // try {
      //     const res = await axios.post('http://localhost:8002/api/payment/process-payment', body, config);

      //     if (res.status === 201)
      //         setSuccess(true);
      // } catch(err) {

      // }

      // setProcessingOrder(false);
  }


  };

  // if (success)
  //   return redirect ('/thank-you');
  return (
    <Container>
      <Wrapper>
        <Title>CHECKOUT</Title>
        <Form  onSubmit={buy} >
          
          <Input placeholder="First name" type="text" name ="first_name" value= {first_name} onChange={onChange} required/>
          <Input placeholder="Email" type="email" name ="email" value= {email} onChange={onChange} required/>
          <Input placeholder="Street Address" type="text" name ="street_address" value= {street_address} onChange={onAddressChange} required/>
          <Input placeholder="City" type="text" name ="city" value= {city} onChange={onAddressChange} required/>
          <select  name ="country" value= {country} onChange={onAddressChange} required> <option value=''>Choose</option> <option value='kenya'>Kenya</option> <option value='uganda'>Uganda</option> <option value='tanzania'>Tanzania</option>   </select>
          <Input placeholder="State/Province" type="text" name ="state_province" value= {state_province} onChange={onAddressChange} required/>
          <Input placeholder="Zipcode" type="text" name ="postal_zip_code" value= {postal_zip_code} onChange={onAddressChange} required/>
         
         <h3>Payment details</h3>

         {
             loading || clientToken === null ? (
              <Load>
                <Oval type='oval' color='#000' width={30} height={30}/>
              </Load>

             ) : (
                <DropIn
                    options={{ authorization: clientToken }}
                    onInstance={ instance => setData({instance:instance}) }
                />
             )
         }
         {
             processingOrder ? (
                <Load>
                    <Oval type='oval' color='#000' width={30} height={30}/>
                </Load>
             ) : (
                <Load>
                {
                    loading ? (
                        <></>
                    ) : (
                        <Button onClick={() => setOrderAttempted(true)} type='submit'> CHECKOUT NOW</Button>
                    )
                }
                </Load>
             )
        }
          
         
          
        </Form>
          
      </Wrapper>
    </Container>
  );
};
export default Checkout