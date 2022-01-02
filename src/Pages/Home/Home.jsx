import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../Context/dataContext';
import { Container } from '../../Components/styles/Container.styled';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Card from "../../Components/Card/Card";
import { Flex } from "../../Components/styles/Flex.styled";
import { fetchRecipes } from "../../Utilities/api";
import ImageOverlay from '../../Components/ImageOverlay/ImageOverlay';
import "./style.scss";

export default function Home() {
  const { data } = useContext(DataContext);
  // useEffect(() => {
  //   fetchRecipes("zucchini", "broccoli", "carrots")
  // },[])

  return (
    <Container>
      {/* {console.log(fetchRecipes("zucchini", "broccoli", "carrots"))} */}
      <div className="create" >
        <SearchBar />
        <h1>CREATE</h1>
        <h1>CRE!!!!!!!!!!!!ATE</h1>
        {data && <ImageOverlay img={data.strMealThumb} text={data.strMeal} />}
        {/* <Flex>
          {
            data &&
            data.map((recipe) => {
              return <Card key={recipe.id} title={recipe.title} image={recipe.image} />
            })
          }
        </Flex> */}

      </div>
    </Container>
  )
}