import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkIfRecipeExisted } from "../../Utilities/Functions";
import "./style.scss";

export default function Card({ image, title, id, obj }) {

  const [isFavoriteState, setIsFavoriteState] = useState(true);

  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem('favoriteUserList')) || [];
    if (!checkIfRecipeExisted(favoriteStorage, obj)) {
      setIsFavoriteState(false);
    }
  }, [obj])

  const toggleFavorite = () => {
    setIsFavoriteState(!isFavoriteState);
    const favoriteStorage = JSON.parse(localStorage.getItem('favoriteUserList')) || [];
    const addFavoriteName = !isFavoriteState ? [...favoriteStorage, obj] : favoriteStorage.filter((object) => {
      return object.uri !== obj.uri
    });
    localStorage.setItem('favoriteUserList', JSON.stringify(addFavoriteName));
  }


  return (
    <div className="card">
      <div className="heart" onClick={toggleFavorite} >
        <div className={`segments left-heart ${isFavoriteState && "background-red"}`} ></div>
        <div className={`segments right-heart ${isFavoriteState && "background-red"}`}></div>
      </div>
      <img src={image} alt={title} />
      <h2 className="card__title">{title}</h2>
      <div className="card__shop">
        <Link to={`/recipe/${id}`} className="card-links"><button className="card__shop__action">Recipe</button></Link>
      </div>
    </div>
  )
}
