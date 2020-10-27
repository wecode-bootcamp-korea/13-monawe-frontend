import React, { Component } from "react";
import "./ProductReview.scss";
import Comment from "./Comment/Comment";

class ProductReviews extends Component {
  render() {
    console.log("data>>>>", this.props.prReview);

    return (
      <div className="reviewContainer">
        <div className="reviewSummary">
          <div className="starReview">
            <span>상품리뷰</span>
            <div className="grade">
              <div className="gradeTxt">
                <em>{this.props.avgrating}</em> <span>/</span>
                <em>5점중</em>
              </div>
              <div className="gradeStarBig">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </div>
          </div>
          <div className="photoReview">
            <h4>
              포토리뷰 (<em> 10 </em>)
            </h4>
            <div className="photoReviewSlider">
              {this.props.prReview.map(el => (
                <img src={el.image_url} />
              ))}{" "}
            </div>
          </div>
        </div>
        <div className="reviewList">
          <div className="listTop">
            <div className="allReview">전체 리뷰 (22)</div>
            <div className="btnArea">
              <span>선택해주세요</span>
              <button className="1:1문의">1:1문의</button>
              <button className="상품리뷰작성">상품리뷰작성</button>
            </div>
          </div>
          <div className="listItems">
            {this.props.prReview.map(comment => (
              <Comment comment={comment} />
            ))}
          </div>
          <div className="listPaging">
            <div></div>
            <div></div>
            <div>
              <span>1</span>
            </div>
            <div>2</div>
            <div>3</div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductReviews;
