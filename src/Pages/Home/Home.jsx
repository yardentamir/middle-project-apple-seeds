import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context/dataContext';
import { Container } from '../../Components/styles/Container.styled';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Card from "../../Components/Card/Card";
import { Flex } from "../../Components/styles/Flex.styled";
// import { fetchRecipesIngredients } from "../../Utilities/api";
import ImageOverlay from '../../Components/ImageOverlay/ImageOverlay';
import Button from "../../Components/Button/Button";
import Carousel from "react-elastic-carousel";
import "./style.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 100, itemsToShow: 2 },
  { width: 200, itemsToShow: 3 },
  { width: 300, itemsToShow: 4 }
]

export default function Home() {
  const { data, data2 } = useContext(DataContext);
  // const [recipes, setRecipes] = useState();

  // useEffect(() => {
  //   // console.log(data)
  //   // console.log(data.strCategory)
  //   const getRecipes = async () => {
  //     const fetchResults = data && await fetchRecipesIngredients(data.strCategory);
  //     data && setRecipes(fetchResults.hits);
  //   }
  //   getRecipes();
  // }, [data])

  return (<>
    {/* {console.log(data2)} */}
    {data && <ImageOverlay img={data.strMealThumb} text={data.strMeal} />}
    <Container>
      {/* {console.log(fetchRecipes("zucchini", "broccoli", "carrots"))} */}
      <div>
        <Button text="click here for the recipe" />
        <h2 style={{ textAlign: 'center' }}>Recipes with Same Category:</h2>
        {console.log(data2)}
        {data2 &&

          <Carousel breakPoints={breakPoints}>
            {
              data2.map(({ recipe }) => {
                return <Card key={recipe.label} title={recipe.label} image={recipe.image} />
              })
            }
          </Carousel>
        }
        {/* <Flex>
        </Flex> */}

      </div>
    </Container>
  </>
  )
}