import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss";

class ProductList extends Component {
  state = { ProductList: "" };

  componentDidMount() {
    fetch("http://localhost:3000/data/list.json", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          ProductList: res.productList
        });
      });
  }

  render() {
    console.log(this.state);
    const { ProductList } = this.state;
    return (
      <div className="ProductList">
        <ul>
          <li>
            <Link to="/" className="stationeryLink">
              <span className="stationeryImg">
                <img
                  src="https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/goods/MG000003497/main/MG000003497_REP_THUMB_285X285_20191206103812.blob"
                  alt="stationeryImg"
                />
              </span>
              <span className="stationeryListInfo">
                <span className="txtBrand">
                  {ProductList && ProductList[0].group}
                </span>
                <span className="txtTitle">
                  {ProductList && ProductList[0].productName}
                </span>
                <span className="txtPrice">
                  <span className="numPrice">
                    {ProductList && ProductList[0].price}
                  </span>
                  <span className="priceWon">원</span>
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductList;
