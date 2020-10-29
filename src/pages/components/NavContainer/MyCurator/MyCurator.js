import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_CY } from "../../../../../src/Config";
import MyCuratorSlider from "./components/MyCuratorSlider";

import "./MyCurator.scss";

class MyCurator extends Component {
  constructor() {
    super();
    this.state = {
      recentelyViewedProducts: []
    };
  }

  componentDidMount() {
    const userToken = localStorage.getItem("token");
    fetch(`${API_CY}/order/recent`, {
      method: "GET",
      headers: {
        Authorization: userToken
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ recentelyViewedProducts: res.viewed_list });
      });
  }

  handleMyCurator = e => {
    this.props.onMyCurator(e);
  };

  handleLogOut = e => {
    this.props.onLogOut(e);
  };

  render() {
    const { isMyCurator, userName } = this.props;
    const { recentelyViewedProducts } = this.state;
    return (
      <div className={isMyCurator ? "MyCurator" : "MyCurator hidden"}>
        <div>
          <div>
            <div className="notice">
              <div className="fitNotice">
                <i className="fas fa-medal" />
                <div>
                  <h3>{userName}님 맞춤알림</h3>
                  <Link to="/MyPage" onClick={this.handleMyCurator}>
                    마이페이지
                  </Link>
                  <Link to="/Login" onClick={this.handleLogOut}>
                    로그아웃
                  </Link>
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
