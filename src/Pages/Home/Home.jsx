import React, { useContext } from 'react';
import { DataContext } from '../../Context/dataContext';
import { Container } from '../../Components/styles/Container.styled';
import Card from "../../Components/Card/Card";
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

  return (<>
    {data &&
      <>
        <ImageOverlay img={data.strMealThumb} text={data.strMeal} />
        <Container>
          <div>
            <Button text="click here for the recipe" />
            <h2 style={{ textAlign: 'center' }}>Recipes with Same Category:</h2>
            {data2 &&
              <Carousel breakPoints={breakPoints}>
                {
                  data2.map(({ recipe }) => {
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