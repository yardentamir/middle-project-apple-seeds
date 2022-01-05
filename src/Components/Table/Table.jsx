import React from 'react';
import "./style.scss";

export default function SearchBar({ renderTitles, renderTableRows, title }) {
  return (
    <div className="container-table">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            {renderTitles()}
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  )
}