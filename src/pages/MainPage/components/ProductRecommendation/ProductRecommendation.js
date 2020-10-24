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
          <p>가장 먼저 만나는 설레는 기다림</p>
        </div>
        <div className="topArea">
          <div className="box New1">
            <img
              src={
                "https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1597881955aae6tmba0j.jpg"
              }
            />
            <div className="redBox">
              <div className="contentBox">
                <div class="cate">PREMIUM PEN</div>
                <div class="name">153 네오 아트</div>
                <div class="plus">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="box New2">
            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1580694209z1vo1d5pj2.jpg" />
            <div className="redBox">
              <div className="contentBox">
                <div class="cate">DESK PEN</div>
                <div class="name">60주년 기념 프러스펜3000 데스크펜</div>
                <div className="plus">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomArea">
          <div className="box New3">
            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_15867453736k3x8jrvw9.jpg" />
            <div className="redBox">
              <div className="contentBox">
                <div class="cate">PREMIUM PEN</div>
                <div class="name">153 네오 아트</div>
                <div class="plus">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="box New4">
            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1594946590xz5hvdcijo.jpg" />
            <div className="redBox">
              <div className="contentBox">
                <div class="cate">PREMIUM PEN</div>
                <div class="name">153 네오 아트</div>
                <div class="plus">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="box New5">
            <img src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1584424435txyhc56jmi.jpg" />
            <div className="redBox">
              <div className="contentBox">
                <div class="cate">PREMIUM PEN</div>
                <div class="name">153 네오 아트</div>
                <div class="plus">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductRecommendation;
