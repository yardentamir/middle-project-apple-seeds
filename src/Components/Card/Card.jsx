import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";

export default function Card({ image, title, id, obj }) {

  const [isFavoriteState, setIsFavoriteState] = useState(true);

  useEffect(() => {

    const checkIfExisted = (favoriteStorage) => {
      let flag = false;
      favoriteStorage.forEach((favorite) => {
        if (favorite.uri === obj.uri) {
          flag = true;
        }
      })
      return flag;
    }
    const favoriteStorage = JSON.parse(localStorage.getItem('favoriteUserList')) || [];
    if (!checkIfExisted(favoriteStorage)) {
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
      <div id="heart" onClick={toggleFavorite} >
        <div id="left" className={`segments ${isFavoriteState && "background-red"}`} ></div>
        <div id="right" className={`segments ${isFavoriteState && "background-red"}`}></div>
      </div>
      <img src={image} alt={title} />
      <h2 className="card__title">{title}</h2>
      <div className="card__shop">
        <Link to={`/recipe/${id}`} className="card-links"><button className="card__shop__action">Recipe</button></Link>
      </div>
    </div>
  )
}
