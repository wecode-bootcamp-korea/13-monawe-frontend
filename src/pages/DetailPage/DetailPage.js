import React, { Component } from "react";
import "./DetailPage.scss";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import ProductReviews from "./Components/ProductReview/ProductReview";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import { API_KM } from "../../Config";

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      averageRating: "",
      productReview: [],
      chosenProduct: []
    };
  }

  componentDidMount() {
    fetch(`${API_KM}/product/${this.props.match.params.id}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log("productinfo", res);
        this.setState({ productInfo: res.data.product_info }, () => {
          fetch(`${API_KM}/order/recent`, {
            method: "POST",
            headers: {
              Authorization:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxMX0.c1-cHH5d36QwjLBnQA_jCAqRnm1BDYnKlTA7Wj77Zho"
            },
            body: JSON.stringify({ product_id: this.state.productInfo.id })
          });
        });
      });

    fetch(`${API_KM}/review?product_id=${this.props.match.params.id}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ productReview: res.data });
      });
  }

  render() {
    const { productInfo, averageRating, productReview } = this.state;

    return (
      <div className="mainContainer">
        <div className="location">
          <ul>
            <li>Home </li>
            <li>
              <div></div>
            </li>
            <li>Stationary</li>
          </ul>
        </div>
        <ProductInfo productInfo={productInfo} key={productInfo} />
        <div className="productCategories">
          <ul>
            <li>
              <a href="javascript:window.scrollTo(500, 00)">상품상세정보</a>
            </li>
            <li>
              <a href="javascript:window.scrollTo(500, 3500)">상품리뷰(22)</a>
            </li>
            <li>
              <a href>스토리픽</a>
            </li>
            <li>
              <a href="javascript:window.scrollTo(500, 2500)">반품교환안내</a>
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
