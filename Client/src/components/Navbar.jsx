import React,{useState, useContext} from 'react'
import { AppContext } from '../App';
import { Link } from "react-router-dom";
import Badge  from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border: 1px solid black;
  outline: none;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const user = useContext(AppContext).userLogin
  const signin = useContext(AppContext).signin
  const cart = useContext(AppContext).cart
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
           <Link to='/'><Logo>LOGO.</Logo></Link>
        </Center>
        <Right>
          {user ? <> <button onClick={()=> signin(null) }>LOGOUT</button></>: 
          <> 
            <Link to ='register'><MenuItem> REGISTER</MenuItem> </Link> 
            <Link to ='login'> <MenuItem>SIGN IN</MenuItem></Link>
         </> }
        <Link to='cart'>
         <MenuItem >
            <Badge badgeContent={cart.length} color="primary">

              <ShoppingCartIcon  />
            </Badge>
          </MenuItem>
         </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar