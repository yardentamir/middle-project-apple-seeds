import React from 'react';
import { Container } from '../../Components/styles/Container.styled';
import Card from "../../Components/Card/Card";
import { Flex } from "../../Components/styles/Flex.styled";
import 'react-multiple-select-dropdown-lite/dist/index.css'


export default function Favorite() {

  const favoriteObjs = JSON.parse(localStorage.getItem('favoriteUserList'));
  return (
    <>
      {favoriteObjs &&
        <Container>
          <Flex>
            {favoriteObjs.map((favorite) => {
              return <Card key={favorite.label} title={favorite.label} image={favorite.image} id={favorite.label} obj={favorite} />
            })}
          </Flex>
        </Container>
      }
    </>
  )
}