import React, { useState } from 'react';
import { Container } from '../../Components/styles/Container.styled';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import { Flex } from "../../Components/styles/Flex.styled";
import MultiSelect from 'react-multiple-select-dropdown-lite';
import { fetchRecipesIngredients } from '../../Utilities/api';
import { debounce } from '../../Utilities/Functions';
import { ingredients } from '../../Utilities/Lists';
import 'react-multiple-select-dropdown-lite/dist/index.css'
import "./style.scss";

export default function Search() {

  const [multiSelected, setMultiSelected] = useState('');
  const [fetchedData, setFetchedData] = useState([]);

  const handelSearch = async () => {
    const result = (await fetchRecipesIngredients(multiSelected)).hits;
    setFetchedData(result);
  }

  return (
    <Container>
      <h3>Search by Meal Name:</h3>
      <SearchBar click={handelSearch} change={({ target: { value } }) => debounce(setMultiSelected(value), 500)} />
      <h3>Search by Ingredients:</h3>
      <div className="multi-selection-wrapper">
        <MultiSelect
          onChange={setMultiSelected}
          options={ingredients}
        />
      </div>
      <Button text="Search" callback={debounce(handelSearch, 500)} />
      <Flex>
        {
          fetchedData &&
          fetchedData.map(({ recipe }) => {
            return <Card key={recipe.uri.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_", "")} title={recipe.label} image={recipe.image} id={recipe.uri.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_", "")} obj={recipe} />
          })
        }
      </Flex>

    </Container>
  )
}