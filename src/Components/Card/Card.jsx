import React from 'react';
import "./style.scss";

export default function Card({ image, title }) {


  return (
    <div className="card">
      <div id="heart">
        <div id="left" class="segments"></div>
        <div id="right" class="segments"></div>
      </div>
      <img src={image} alt={title} />
      <h2 className="card__title">{title}</h2>
      {/* <span className="card__description">{props.source}</span>  */}
      <div className="card__shop">
        {/* <span className="card__shop__price">{props.price}</span> */}
        <button className="card__shop__action">
          Recipe
        </button>
      </div>
    </div>
  )
}
