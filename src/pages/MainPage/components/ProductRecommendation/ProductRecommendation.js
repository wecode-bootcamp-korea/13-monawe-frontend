import React, { Component } from "react";
import "./ProductRecommendation.scss";

class ProductRecommendation extends Component {
  render() {
    return (
      <div className="Container">
        <div className="title">
          <h2>
            New <br /> Arrivals
          </h2>
          <div className="redLine"></div>
        </div>
        <div className="topArea">
          <div className="boxNew1">
            <img
              src={
                "https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1597881955aae6tmba0j.jpg"
              }
            />
          </div>
          <div className="boxNew2">
            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1580694209z1vo1d5pj2.jpg" />
          </div>
        </div>
        <div className="bottomArea">
          <div className="boxNew3">
            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_15867453736k3x8jrvw9.jpg" />
          </div>
          <div className="boxNew4">
            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1594946590xz5hvdcijo.jpg" />
          </div>
          <div className="boxNew5">
            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1584424435txyhc56jmi.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductRecommendation;
