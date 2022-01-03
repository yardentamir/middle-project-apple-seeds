import React from 'react';
import "./style.scss";

export default function SearchBar({ click, change }) {
  return (
    <div className="wrap">
      <div className="search">
        <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={change} />
        <button type="submit" className="searchButton" onClick={click}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  )
}