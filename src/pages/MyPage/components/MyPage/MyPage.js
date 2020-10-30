import React, { Component } from "react";
import MyCuratorSlider from "../../../components/NavContainer/MyCurator/components/MyCuratorSlider";
import { API_CY } from "../../../../Config";
import "./MyPage.scss";

class MyPage extends Component {
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

  render() {
    const { recentelyViewedProducts } = this.state;
    return (
      <div className="MyPage">
        <div>
          <div className="recentelyOrderHistory">
            <strong>최근 주문현황</strong>
            <div>
              <span>최근 1개월</span>
              <span>주문목록 보기</span>
            </div>
          </div>
          <div class="orderProcess">
            {PROCESSES.map(process => (
              <div className="processUnit">
                <span>{process.step}</span>
                <div>{process.unit}</div>
              </div>
            ))}
          </div>
          <div className="orderLevel">
            <div>
              <span>취소</span>
              <div>0</div>
            </div>
            <div>
              <span>교환</span>
              <div>0</div>
            </div>
            <div>
              <span>반품</span>
              <div>0</div>
            </div>
          </div>
        </div>
        <div className="recentelyViewedProducts">
          <div>
            <strong>최근본상품</strong>
            <span>최근 1주일</span>
          </div>
          <MyCuratorSlider recentelyViewedProducts={recentelyViewedProducts} />
        </div>
      </div>
    );
  }
}

export default MyPage;

const PROCESSES = [
  { step: "입금대기", unit: 0 },
  { step: "결재완료", unit: 0 },
  { step: "상품준비중", unit: 0 },
  { step: "배송중", unit: 0 },
  { step: "배송완료", unit: 0 }
];
