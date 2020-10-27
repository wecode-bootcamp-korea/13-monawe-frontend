import React, { Component } from "react";
import "./Cart.scss";

export default class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <div className="titleArea">
          <h2>장바구니</h2>
        </div>
        <div className="innerCartContent">
          <h3>일반장바구니 (n)</h3>
          <ul className="infoTxt">
            <li>
              모나위 배송상품과 업체배송상품은 배송비가 별도로 부과되며,
              산간도서지역은 추가 배송비가 발생됩니다.
            </li>
            <li>
              장바구니에 담긴 상품은 최대 30일까지 보관되며 30일 경과 시 자동
              삭제됩니다.
            </li>
          </ul>
        </div>
        <div className="formArea">
          <form>
            <fieldset className="listField">
              <table>
                <caption>장바구니 목록</caption>
                <colgroup>
                  <col style={{ width: "40px" }} />
                  <col style={{ width: "96px" }} />
                  <col />
                  <col style={{ width: "120px" }} />
                  <col style={{ width: "110px" }} />
                  <col style={{ width: "120px" }} />
                  <col style={{ width: "120px" }} />
                  <col style={{ width: "110px" }} />
                  <col style={{ width: "110px" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          class="small"
                          className="cartChkAll"
                        />
                      </label>
                    </th>
                    <th colSpan="2">상품명</th>
                    <th>상품금액</th>
                    <th>수량</th>
                    <th>
                      주문금액
                      <small>(할인금액)</small>
                    </th>
                    <th>업체</th>
                    <th>배송비</th>
                    <th>주문</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label>
                        <input
                          type="checkbox"
                          class="small"
                          className="cartIdx_0"
                          onClick={this.calPrice}
                        />
                      </label>
                    </td>
                    <td>
                      <figure>
                        <img src="https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/goods/MG000003497/main/MG000003497_REP_THUMB_80X80_20191206103813.blob" />
                      </figure>
                    </td>
                    <td>
                      <div className="infoArea">
                        <span>153 블라썸</span>
                        <span className="txtOption">비올라(Viola)</span>
                      </div>
                    </td>
                    <td className="txtRight">
                      <em>20,000</em>원
                    </td>
                    <td>
                      <div className="eaArea">
                        <input
                          type="text"
                          className="goodsCnt"
                          value="1"
                          maxLength="4"
                        />
                        <button
                          type="button"
                          class="btn-down"
                          className="btnDown"
                          onClick={this.removeCnt}
                        />
                        <button
                          type="button"
                          class="btn-up"
                          className="btnUp"
                          onClick={this.addCnt}
                        />
                      </div>
                      <button
                        type="button"
                        class="btn-whitegray small"
                        className="btnCount"
                        onClick={this.changeCnt}
                      >
                        변경
                      </button>
                    </td>
                    <td className="txtRight">
                      <em className="payPrice">120,000</em>원
                      <small className="discountPrice">(0원)</small>
                    </td>
                    <td>
                      <small>모나위배송</small>
                    </td>
                    <td rowSpan="1" className="txtRight">
                      <em>0</em>원
                      <span class="deliveryinfo">
                        <a href="#" class="btn-popinfo type-over">
                          <strong>!</strong>
                        </a>
                      </span>
                    </td>
                    <td className="orderBtn">
                      <button
                        type="button"
                        class="btn-gray small"
                        onclick={this.orderCheck}
                      >
                        바로주문
                      </button>
                      <button
                        type="button"
                        class="btn-whitegray small"
                        onclick={this.removeCart}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="btnArea">
                <label>
                  <input
                    type="checkbox"
                    class="small"
                    className="chkCartAll2"
                  />
                  전체선택
                </label>
                <button
                  type="button"
                  class="btn-gray small"
                  onclick={this.addWishList}
                >
                  찜하기
                </button>

                <button
                  type="button"
                  class="btn-whitegray small"
                  onclick={this.removeSelected}
                >
                  선택삭제
                </button>
              </div>
            </fieldset>
            <fieldset className="priceField">
              <dl className="orderPrice">
                <dt>상품금액</dt>
                <dd>
                  <em className="totalPrice">132,000</em>원
                </dd>
              </dl>
              <dl className="discount">
                <dt>할인금액</dt>
                <dd>
                  <em className="totalDiscountPrice">0</em>원
                </dd>
              </dl>
              <dl className="shipping">
                <dt>배송비</dt>
                <dd>
                  <em className="deliveryPrcie">0</em>원
                </dd>
              </dl>
              <dl className="total">
                <dt>총 결제금액</dt>
                <dd>
                  <em className="totalPayPrice">132,000</em>원
                </dd>
              </dl>
            </fieldset>
            <div className="btnArea">
              <button
                type="button"
                class="btn-whitegray"
                onclick={this.orderSelected}
              >
                선택상품주문
              </button>
              <button
                type="button"
                class="btn-whitegray"
                onclick={this.orderTable}
              >
                전체상품주문
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
