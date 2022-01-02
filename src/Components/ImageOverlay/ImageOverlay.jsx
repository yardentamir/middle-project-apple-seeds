import React from 'react';
import './style.scss'

export default function ImageOverlay({ text, img }) {


  return (<div className="image-overlay">
    <img className="backward-image" src={img} alt={text} />
    <h2 className="text-on-img">{text}</h2>
  </div>)
}