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
      productReview: [],
      chosenProduct: []
    };
  }

  componentDidMount() {
    fetch("http://10.58.1.8:8000/product/1", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log("productinfo", res);
        this.setState({ productInfo: res.data.product_info });
        // this.setState({ averageRating: res.average_rating });
        // this.setState({ productReview: res.REVIEWS });
      });

    fetch("http://10.58.1.8:8000/review?product_id=1", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log("review", res);

        // this.setState({ averageRating: res.average_rating });
        this.setState({ productReview: res.data });
      });

    fetch("http://10.58.1.8:8000/order/recent", {
      method: "POST",
      headers: { Auth: localStorage.getItem("token") },
      body: JSON.stringify({ product_id: this.state.product_info.id })
    });
  }

  render() {
    const { productInfo, averageRating, productReview } = this.state;

    return (
      <>
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
                <a>상품상세정보</a>
              </li>
              <li>
                <a href="javascript:window.scrollTo(500, 3500)">상품리뷰(22)</a>
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
      </>
    );
  }
}

export default DetailPage;
