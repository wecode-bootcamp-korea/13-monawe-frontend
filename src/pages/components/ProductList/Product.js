import React, { Component } from "react";
import "./Product.scss";

export default class Product extends Component {
  render() {
    const { subcategoryName, name, price, imageUrl } = this.props;
    return (
      <li className="Product">
        <div className="imgBox">
          <img src={imageUrl} />
        </div>
        <span className="stationeryListInfo">
          <span className="txtBrand">{subcategoryName}</span>
          <span className="txtTitle">{name}</span>
          <span className="txtPrice">
            <span className="numPrice">{price}</span>
            <span className="priceWon">원</span>
          </span>
        </span>
      </li>
    );
  }
}
