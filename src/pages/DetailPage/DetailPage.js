import React, { Component } from "react";
import "./DetailPage.scss";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import ProductReviews from "./Components/ProductReview/ProductReview";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      averageRating: "",
      productReview: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/product-info.json", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ productInfo: res.productInfo });
        this.setState({ averageRating: res.averageRating });
        this.setState({ productReview: res.REVIEWS });
      });
  }

  render() {
    const { productInfo, averageRating, productReview } = this.state;

    return (
      <div className="mainContainer">
        <div className="location">
          <ul>
            <li>Home</li>
            <li>
              <div></div>
            </li>
            <li>Stationary</li>
          </ul>
        </div>
        <ProductInfo productInfo={productInfo} />
        <div className="productCategories">
          <ul>
            <li>
              <a href>상품상세정보</a>
            </li>
            <li>
              <a href>상품리뷰(22)</a>
            </li>
            <li>
              <a href>스토리픽</a>
            </li>
            <li>
              <a>반품교환안내</a>
            </li>
          </ul>
        </div>
        <ProductDetail productInfo={productInfo} />
        <ProductReviews avgrating={averageRating} prReview={productReview} />
      </div>
    );
  }
}

export default DetailPage;
