import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container } from '../../Components/styles/Container.styled';
import { FlexLeft } from '../../Components/styles/FlexLeft.styled';
import { fetchRecipesIngredients } from '../../Utilities/api';
import { filterObjByKey, renderArrayLabels } from '../../Utilities/Functions';
import Table from "../../Components/Table/Table";
import "./style.scss";

export default function Recipe() {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  const keysFilterArrIngredients = ['text', 'quantity', 'weight', 'food', 'image'];
  const keysFilterArrNutrients = ['label', 'quantity'];

  useEffect(() => {
    const getData = async () => {
      const result = (await fetchRecipesIngredients(id)).hits;
      setFetchedData(result);
    }
    getData();
  }, [id])


  const renderTitles = (objToFilter, keysFilterArr) => {
    return Object.keys(filterObjByKey(objToFilter, keysFilterArr)).map((key) => {
      return <th key={key}>{key}</th>
    })
  }

  const renderIngredientsTableRows = () => {
    return fetchedData[0].recipe.ingredients.map((val, index) => {
      return (
        <tr key={val + index}>{Object.entries(filterObjByKey(val, keysFilterArrIngredients)).map((valArrKeyValue, index) => {
          return valArrKeyValue[0] === "image" ? <td key={valArrKeyValue[1] + index}><img src={valArrKeyValue[1]} alt={valArrKeyValue[1]} /></td> : <td key={valArrKeyValue[1] + index}>{valArrKeyValue[1]}</td>
        })}
        </tr>
      )
    })
  }

  const renderTableNutrientsRows = () => {
    return Object.entries(fetchedData[0].recipe.totalNutrients).map((valArrKeyValue, index) => {
      return (
        <tr key={valArrKeyValue + index}>{Object.entries(filterObjByKey(valArrKeyValue[1], keysFilterArrNutrients)).map((valArrKeyValue2, index) => {
          return valArrKeyValue2[0] === "quantity" ? <td key={valArrKeyValue2[1] + index}>{valArrKeyValue2[1] + valArrKeyValue[1].unit}</td> : <td key={valArrKeyValue2[1] + index}>{valArrKeyValue2[1]}</td>
        })}
        </tr>
      )
    })
  }



  return (
    <Container>
      {fetchedData[0] &&
        <>
          <h2>{fetchedData[0].recipe.label}</h2>
          <FlexLeft>
            <div>
              <img src={fetchedData[0].recipe.image} alt={fetchedData[0].recipe.label} />
            </div>
            <div>
              <h3>Calories</h3>
              <p>{fetchedData[0].recipe.calories}</p>
              <h3>Dish Type</h3>
              <ul>{renderArrayLabels(fetchedData[0].recipe.dishType)}</ul>
              <h3>Meal Type</h3>
              <ul>{renderArrayLabels(fetchedData[0].recipe.mealType)}</ul>
              <h3>Total Time</h3>
              <p>{fetchedData[0].recipe.totalTime}</p>
            </div>
          </FlexLeft>
          <div className="tags">
            <h3>Health Tags</h3>
            <ul>
              {renderArrayLabels(fetchedData[0].recipe.healthLabels)}
            </ul>
          </div>
          <Table title="Ingredients" renderTitles={() => renderTitles(fetchedData[0].recipe.ingredients[0], keysFilterArrIngredients)} renderTableRows={renderIngredientsTableRows} />
          <Table title="Nutrients" renderTitles={() => renderTitles(fetchedData[0].recipe.totalNutrients.CA, keysFilterArrNutrients)} renderTableRows={renderTableNutrientsRows} />
        </>
      }
    </Container>
  )
}