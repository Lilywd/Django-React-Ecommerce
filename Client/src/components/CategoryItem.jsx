import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 3;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:black;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src= {item.image} />
      <Info>
        <Title>{item.name}</Title>
        <Link to='shop'>
          <Button>SHOP NOW</Button>
      </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;