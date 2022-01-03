import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";

export default function Card({ image, title, id }) {


  return (
    <div className="card">
      <div id="heart">
        <div id="left" className="segments"></div>
        <div id="right" className="segments"></div>
      </div>
      <img src={image} alt={title} />
      <h2 className="card__title">{title}</h2>
      {/* <span classNameName="card__description">{props.source}</span>  */}
      <div className="card__shop">
        {/* <span classNameName="card__shop__price">{props.price}</span> */}
        <Link to={`/recipe/${id}`} className="card-links"><button className="card__shop__action">Recipe</button></Link>

      </div>
    </div>
  )
}
// to={`${product.id}`}
