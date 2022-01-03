import React, { useContext, useEffect, } from 'react';
import { useParams } from "react-router-dom";
import { DataContext } from '../../Context/dataContext';
import { Container } from '../../Components/styles/Container.styled';
import Button from "../../Components/Button/Button";
import "./style.scss";

export default function Recipe() {
  const { id } = useParams();
  return (
    <Container>
      <h2>{id}</h2>

    </Container>
  )
}