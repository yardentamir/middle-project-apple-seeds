import React, { useContext, useEffect, useState } from 'react';
import { Container } from '../../Components/styles/Container.styled';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import { Flex } from "../../Components/styles/Flex.styled";
import MultiSelect from 'react-multiple-select-dropdown-lite';
import { fetchRecipesIngredients } from '../../Utilities/api';
import { debounce } from '../../Utilities/Functions';
import 'react-multiple-select-dropdown-lite/dist/index.css'
import "./style.scss";


export default function Search() {
  const ingredients = [
    { label: "zucchini", value: "zucchini" },
    { label: "broccoli", value: "broccoli" },
    { label: "carrots", value: "carrots" },
    { label: "pasta", value: "pasta" },
    { label: "red pepper", value: "red pepper" },
    { label: "onion", value: "onion" },
    { label: "pepperoni", value: "pepperoni" },
    { label: "olive oil", value: "olive oil" },
    { label: "fresh basil", value: "fresh basil" },
    { label: "cheese", value: "cheese" },
    { label: "vegetables", value: "vegetables" },
    { label: "fettuccine", value: "fettuccine" },
    { label: "salt", value: "salt" },
  ]

  const [multiSelected, setMultiSelected] = useState('');
  const [fetchedData, setFetchedData] = useState([]);

  // const handelSearch = async () => {
  //   const result = (await fetchRecipesIngredients(multiSelected)).hits;
  //   setFetchedData(result);
  // }

  return (
    <Container>
      <h3>Search by Meal Name:</h3>
      <SearchBar click={handelSearch} change={({ target: { value } }) => debounce(() => { setMultiSelected(value) }, 500)} />
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
            return <Card key={recipe.uri} title={recipe.label} image={recipe.image} id={recipe.label} />
          })
        }
      </Flex>

    </Container>
  )
}