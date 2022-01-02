import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../Context/dataContext';
import { Container } from '../../Components/styles/Container.styled';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Button from "../../Components/Button/Button";
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
        <h2>Random meal for you</h2>
        {data && <div></div>}
        <Button text="click here for the recipe" />
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