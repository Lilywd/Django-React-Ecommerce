import React, {useState,useEffect} from 'react';
import { redirect } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';
import {Oval} from 'react-loader-spinner';
import {mobile} from "../responsive";
import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  height: 80vh;
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

  useEffect(() => {
    const fetchData = async () => {
        const config = {
            headers: {
                'Accept': 'application/json',
            }
        }

        // try {
        //     // const res = await axios.get('http://localhost:8000/api/payment/generate-token', config);

        //     if (res.status === 200) {
        //         setClientToken(res.data.token);
        //         setLoading(false);
        //         setProcessingOrder(false);
        //     }
        // } catch(err) {
            
        // }
    };

    fetchData();
  }, []);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value.replace(/\ /g,'') });
  const onAddressChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const formStyling = orderAttempted ?'needs-validation was-validated': 'needs-validation';
  
  

  const buy = e =>{
    e.preventDefault();
  };

  if (success)
    return redirect ('/thank-you');
  return (
    <Container>
      <Wrapper>
        <Title>CHECKOUT</Title>
        <Form  onSubmit={buy}>
          
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
                     <Oval  color='#00bfff' width={30} height={30}/>
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