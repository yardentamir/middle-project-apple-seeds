import React, { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import { Container } from '../../Components/styles/Container.styled';
import Card from "../../Components/Card/Card";
import ImageOverlay from '../../Components/ImageOverlay/ImageOverlay';
import Carousel from "react-elastic-carousel";
import "./style.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 100, itemsToShow: 2 },
  { width: 200, itemsToShow: 3 },
  { width: 300, itemsToShow: 4 }
]

export default function Home() {
  const { randomData, EmdamamData } = useContext(DataContext);

  return (<>
    {randomData &&
      <>
        <ImageOverlay img={randomData.strMealThumb} text={randomData.strMeal} />
        <Container>
          <div>
            <h2 style={{ textAlign: 'center' }}>Recipes with Same Category:</h2>
            {EmdamamData &&
              <Carousel breakPoints={breakPoints}>
                {
                  EmdamamData.map(({ recipe }) => {
                    return <Card key={recipe.uri.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_", "")} title={recipe.label} image={recipe.image} id={recipe.uri.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_", "")} obj={recipe} />
                  })
                }
              </Carousel>
            }
          </div>
        </Container>
      </>
    }
  </>
  )
}