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
            <img src={"/images/1번.jpg"} />
            <div className="redBox">
              <div className="contentBox">
                <div class="cate">PREMIUM PEN</div>
                <div class="name">404 네오 아트</div>
                <div class="plus">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="box New2">
            <img src="/images/2번.png" width="786" height="360" />
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
            <img src="/images/3번.jpg" />
            <div className="redBox">
              <div className="contentBox">
                <div class="cate">PREMIUM PEN</div>
                <div class="name">404 네오 아트</div>
                <div class="plus">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="box New4">
            <img src="/images/4번.jpg" />
            <div className="redBox">
              <div className="contentBox">
                <div class="cate">PREMIUM PEN</div>
                <div class="name">404 네오 아트</div>
                <div class="plus">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="box New5">
            <img src="/images/5번.jpg" />
            <div className="redBox">
              <div className="contentBox">
                <div class="cate">PREMIUM PEN</div>
                <div class="name">404 네오 아트</div>
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
