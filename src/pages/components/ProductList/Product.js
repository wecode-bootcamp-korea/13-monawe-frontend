import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

export default class Product extends Component {
  getNumberTransferToPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const { subcategoryName, name, price, imageUrl, id } = this.props;
    return (
      <li className="Product">
        <Link to={`detail/${id}`}>
          <div className="imgBox">
            <img src={imageUrl} alt="imageUrl" />
          </div>
          <span className="stationeryListInfo">
            <span className="txtBrand">{subcategoryName}</span>
            <span className="txtTitle">{name}</span>
            <span className="txtPrice">
              <span className="numPrice">
                {this.getNumberTransferToPrice(price)}
              </span>
              <span className="priceWon">원</span>
            </span>
          </span>
        </Link>
      </li>
    );
  }
}
