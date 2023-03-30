import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  font-style: Nunito;
  
`;

const Anouncement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Anouncement;