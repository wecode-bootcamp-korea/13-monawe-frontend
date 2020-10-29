import React, { Component } from "react";
import { Link } from "react-router-dom";
import MYPAGEMENUS from "./MyPageData";
import MyPage from "./components/MyPage";
import "./MyPageContainer.scss";

class MyPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      myPageData: [],
      clickedBoxIdx: ""
    };
  }
  componentDidMount() {
    this.setState({
      myPageData: MYPAGEMENUS
    });
  }

  handleMenuLists = idx => {
    this.state.clickedBoxIdx !== idx
      ? this.setState({ clickedBoxIdx: idx })
      : this.setState({ clickedBoxIdx: "" });
  };

  render() {
    const { myPageData, clickedBoxIdx } = this.state;

    return (
      <div className="MyPageContainer">
        <h1>마이페이지</h1>
        <div className="myPageBanner">
          <i className="fas fa-medal" />
          <div>
            <div className="userInfo">
              <span>
                <strong>김수연</strong>님
              </span>
              <span>
                현재 등급은 <span className="fontHighlight">그린(Green)</span>
                입니다.
              </span>
              <div>
                <Link to="/Login">로그아웃</Link>
                <button>등급별혜택안내 +</button>
              </div>
            </div>
            <ul className="myPageMenus">
              {MYPAGESTATUS.map((item, idx) => (
                <li key={idx}>
                  <span>{item.statusName}</span>
                  <span>
                    <strong>{item.status}</strong>
                    {item.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="myPageContents">
          <aside>
            <ul>
              {myPageData.map((menu, idx) => (
                <div key={idx}>
                  <Link onClick={() => this.handleMenuLists(idx)}>
                    {menu.pageName}
                  </Link>
                  <div
                    className={
                      clickedBoxIdx === idx ? "menuLists active" : "menuLists"
                    }
                  >
                    {menu.categories?.map((category, idx) => (
                      <li key={idx}>{category}</li>
                    ))}
                  </div>
                </div>
              ))}
            </ul>
          </aside>
          <div>
            <MyPage />
          </div>
        </div>
      </div>
    );
  }
}

export default MyPageContainer;

const MYPAGESTATUS = [
  { statusName: "쿠폰", status: 1, unit: "장" },
  { statusName: "배송중", status: 0, unit: "건" },
  { statusName: "예치금", status: 0, unit: "원" },
  { statusName: "적립금", status: 0, unit: "원" }
];
