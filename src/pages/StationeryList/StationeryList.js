import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StationeryList.scss";

class StationeryList extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     productInfo: {}
  //   };
  // }

  // componentDidMount() {
  //   fetch("http://localhost:3000/data/list.json", {
  //     method: "GET"
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         productInfo: res,
  //         productInfoIsLoading: true
  //       });
  //     });
  // }
  render() {
    return (
      <div>
        <div className="StationeryList">
          <div className="inner">
            <div className="categoryArea">
              <ul>
                <li className="active">
                  <Link to="/" className="StationeryTitle">
                    StationeryList
                  </Link>
                </li>
              </ul>
              <ul className="categoryBox">
                <li>
                  <Link to="/" className="depth2Title">
                    프리미엄 펜
                  </Link>
                  <ul>
                    <li>
                      <Link className="depth3" to="/">
                        153프리미엄
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        데스크펜/스마트펜
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        파카
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        카펜다쉬
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        카웨코
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        매뉴스크립트
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="depth2Title" to="/">
                    펜/펜슬
                  </Link>
                  <ul>
                    <li>
                      <Link className="depth3" to="/">
                        볼펜
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        수성펜/사인펜
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        연필/샤프
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        형광펜
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="depth2Title" to="/">
                    마카
                  </Link>
                  <ul>
                    <li>
                      <Link className="depth3" to="/">
                        네인펜/유성매직
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        생활/보드마카
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        패브릭/세라믹마카
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="depth2Title" to="/">
                    컬러링/브러쉬
                  </Link>
                  <ul>
                    <li>
                      <Link className="depth3" to="/">
                        컬러링펜
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        브러쉬펜
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        미술용품
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="depth2Title" to="/">
                    디자인 문구
                  </Link>
                  <ul>
                    <li>
                      <Link className="depth3" to="/">
                        다이어리/노트
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        카드/봉투
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        파우치
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        풀/스티커/테이프
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        스탬프
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        데스크용품
                      </Link>
                    </li>
                    <li>
                      <Link className="depth3" to="/">
                        모나미MD상품
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="categorySort">
          <div className="innerSort">
            <h3>문구</h3>
            <span>
              "등록상품:"
              <b>482</b>
              "개"
            </span>
            <div className="sortArea">
              <select name="pageSize" id="pageSize" onchange="goChangePage();">
                <option value="40" selected>
                  40개씩
                </option>
                <option value="80" selected>
                  80개씩
                </option>
                <option value="100" selected>
                  100개씩
                </option>
              </select>
              <div className="dropDown" tableindex="0">
                <span className="current">40개씩</span>
                <div className="list">
                  <ul>
                    <li
                      className="option selected"
                      data-value="40"
                      data-display-text
                    >
                      40개씩
                    </li>
                    <li className="option" data-value="80" data-display-text>
                      80개씩
                    </li>
                    <li className="option" data-value="100" data-display-text>
                      100개씩
                    </li>
                  </ul>
                </div>
              </div>
              <select
                name="serchOrderText"
                id="serchOrderTexte"
                onchange="goChangeOrder();"
              >
                <option value="신상품순" selected>
                  신상품순
                </option>
                <option value="가격 높은순" selected>
                  가격 높은순
                </option>
                <option value="가격 낮은순" selected>
                  낮은 가격순
                </option>
              </select>
              <div className="dropDown" tableindex="0">
                <span className="current">40개씩</span>
                <div className="list">
                  <ul>
                    <li
                      className="option selected"
                      data-value="40"
                      data-display-text
                    >
                      40개씩
                    </li>
                    <li className="option" data-value="80" data-display-text>
                      80개씩
                    </li>
                    <li className="option" data-value="100" data-display-text>
                      100개씩
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StationeryList;
