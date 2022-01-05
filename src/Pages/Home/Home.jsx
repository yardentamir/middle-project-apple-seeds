import React, { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import { Container } from '../../Components/styles/Container.styled';
import Card from "../../Components/Card/Card";
import ImageOverlay from '../../Components/ImageOverlay/ImageOverlay';
import Carousel from "react-elastic-carousel";
import { breakPoints } from '../../Utilities/Lists';
import "./style.scss";

export default function Home() {
  const { randomData, EmdamamData } = useContext(DataContext);

  return (<>
    {randomData &&
      <>
        {console.log(randomData)}
        <ImageOverlay img={randomData.strMealThumb} text={randomData.strMeal} />
        <Container>
          <div>
            <div className="iframe-wrapper">
              <iframe className="responsive-iframe" key={randomData.idMeal} src={randomData.strYoutube.replace('/watch?v=', "/embed/")} title={randomData.strMeal} width="420" height="315" frameBorder="0" allowFullScreen></iframe>
            </div>
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