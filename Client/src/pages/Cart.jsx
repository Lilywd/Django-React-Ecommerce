import React,{useState, useContext} from 'react'
import { AppContext } from '../App';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { toast} from 'react-toastify';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useContext(AppContext).cart
  const setCart = useContext(AppContext).setCart
  const deleteItem = useContext(AppContext).deleteItem
  
  const cartAddInfo = () => toast.success("item added cart", {
    position:"top-right"
    })

  const cartRemoveInfo = () => toast.error("item deleted from cart", {
    position:"top-right"
  })

 
  const increase = (props) => {
 
  let cart2 = [...cart]
  cart2.forEach(element => {
    if (element.id === props.id){
      element.quantity += 1
    }
    
  });
   setCart(cart2)
  

   
  }
  const decrease = (props) => {
 
    let cart3 = [...cart]
    cart3.forEach(element => {
      if (element.id === props.id){
        if (element.quantity !== 1){
          element.quantity -=1
        }
       
        
      }
      
    });
     setCart(cart3)
    
  
     
    }
 
let Total = 0
  cart.forEach(item => {
    Total += (item.price * item.quantity)
  });
  return (

    <Container>
    
     
      <Wrapper>
        <Title>CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          
          
        </Top>
        <Bottom>
          <Info>
          {cart.map((item) => (
              <div key={item.id} >
                  <Product>

                    <ProductDetail>
                      <Image src={item.image} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {item.title}
                        </ProductName>
                        <ProductId>
                          <b>Brand:</b> {item.brand}
                        </ProductId>
                        <ProductColor color="black" />
                        <ProductSize>
                          <b>Size:</b> {item.size ? item.size : 200}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <AddIcon onClick={() =>increase(item) }/>
                        <ProductAmount>{item.quantity}</ProductAmount>
                        <RemoveIcon onClick={() =>decrease(item) }  />

                        <DeleteIcon onClick={() => {deleteItem(item); cartRemoveInfo()}}/>
                      </ProductAmountContainer>
                      <ProductPrice>$ {item.price}</ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
              </div>

          ))}
            
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {Total}</SummaryItemPrice>
            </SummaryItem>
           
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {Total}</SummaryItemPrice>
            </SummaryItem>
           
              <Link to='/checkout'> <Button> CHECKOUT NOW</Button></Link>
          </Summary>
        </Bottom>
      </Wrapper>
     
    </Container>
  );
};

export default Cart;