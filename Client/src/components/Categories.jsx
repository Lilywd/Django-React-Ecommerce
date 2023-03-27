
import React,{useState, useContext} from 'react'
import styled from "styled-components";
import { AppContext } from '../App';
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  const category = useContext(AppContext).category
  return (
    <Container>
      {category.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;