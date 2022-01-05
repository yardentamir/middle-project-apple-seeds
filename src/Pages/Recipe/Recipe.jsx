import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container } from '../../Components/styles/Container.styled';
import { fetchRecipesIngredients } from '../../Utilities/api';
import { filterObjByKey } from '../../Utilities/Functions';
import "./style.scss";

export default function Recipe() {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  const keysFilterArr = ['text', 'quantity', 'food', 'image'];

  useEffect(() => {
    const getData = async () => {
      const result = (await fetchRecipesIngredients(id)).hits;
      setFetchedData(result);
    }
    getData();
  }, [id])


  const renderTitles = () => {
    return Object.keys(filterObjByKey(fetchedData[0].recipe.ingredients[0], keysFilterArr)).map((key) => {
      return <th key={key}>{key}</th>
    })
  }

  const renderTableRows = () => {
    return fetchedData[0].recipe.ingredients.map((val, index) => {
      return (
        <tr key={val + index}>{Object.entries(filterObjByKey(val, keysFilterArr)).map((key, index) => {
          return key[0] === "image" ? <td key={key[1] + index}><img src={key[1]} alt={key[1]} /></td> : <td key={key[1] + index}>{key[1]}</td>
        })}
        </tr>
      )
    })
  }

  const renderHealthLabels = () => {
    return fetchedData[0].recipe.healthLabels.map((healthLabel) => <div key={healthLabel}>{healthLabel}</div>)
  }

  return (
    <Container>
      {fetchedData[0] &&
        <>
          <h2>{fetchedData[0].recipe.label}</h2>
          <img src={fetchedData[0].recipe.image} alt={fetchedData[0].recipe.label} />
          <h3>calories</h3>
          <p>{fetchedData[0].recipe.calories}</p>
          <h3>Ingredients</h3>
          <div className="container-table">
            <table>
              <thead>
                <tr>
                  {renderTitles()}
                </tr>
              </thead>
              <tbody>
                {renderTableRows()}
              </tbody>
            </table>
            <div>
              {renderHealthLabels()}
            </div>
          </div>
        </>
      }
    </Container>
  )
}