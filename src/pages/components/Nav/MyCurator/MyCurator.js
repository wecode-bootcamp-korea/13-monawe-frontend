import React, { Component } from "react";
import "./MyCurator.scss";
import MyCuratorSlider from "./components/MyCuratorSlider";

class MyCurator extends Component {
  constructor() {
    super();
    this.state = {
      recentelyViewedProducts: []
    };
  }

  componentDidMount() {
    fetch("/data/list.json")
      .then(res => res.json())
      .then(res => {
        this.setState({ recentelyViewedProducts: res.data });
      });
  }

  handleMyCurator = e => {
    this.props.onMyCurator(e);
  };

  render() {
    const { isMyCurator } = this.props;
    const { recentelyViewedProducts } = this.state;
    return (
      <div className={isMyCurator ? "MyCurator" : "MyCurator hidden"}>
        <div>
          <div>
            <div className="notice">
              <div className="fitNotice">
                <i className="fas fa-medal" />
                <div>
                  <h3>모나위님 맞춤알림</h3>
                  <button>마이페이지</button>
                  <button>로그아웃</button>
                </div>
              </div>
              <div className="shoppingNotice">
                <h4>쇼핑알림</h4>
                <span>
                  ·&nbsp;&nbsp; 상품의 재입고, 쿠폰 상황을 알려드립니다.
                </span>
              </div>
            </div>
          </div>
          <div className="curatorContents">
            <div className="recommendMenu">
              <h4>최근 본 상품</h4>
              <span>이 상품은 어떠세요?</span>
              <span>지금이 바로 기회!</span>
            </div>
            <div className="productLists">
              <MyCuratorSlider
                recentelyViewedProducts={recentelyViewedProducts}
              />
              {/* <i className="fas fa-exclamation-circle" />
              <strong>최근 본 상품이 없습니다.</strong> */}
            </div>
          </div>
        </div>
        <div className="curatorCloseBtn">
          <button className="fas fa-times" onClick={this.handleMyCurator} />
        </div>
      </div>
    );
  }
}

export default MyCurator;
