import React, { Component } from "react";
import "./Cart.scss";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      product_id: "",
      product_option_id: "",
      product_amount: 1,
      product_price: 20000,
      totalPricebyProduct: 20000,
      cartList: {}
    };
  }

  componentDidMount() {
    fetch("http://10.58.5.5:8000/order/cart", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          cartList: res.PRODUCTS
        });
      });
  }

  /*addItem = () => {
    const {cartList} = this.state;
    this.setState({
      cartList: [...cartList, {user: Date.now(), userId: "jjburi_", comment: this.state.content}],
      content: ""
    })
  };*/

  removeCnt = () => {
    const { product_amount } = this.state;
    this.setState({ product_amount: product_amount - 1 });
  };

  addCnt = () => {
    const { product_amount } = this.state;
    this.setState({ product_amount: product_amount + 1 });
  };

  changeCnt = () => {
    const { totalPricebyProduct, product_price, product_amount } = this.state;
    this.setState({ totalPricebyProduct: product_amount * product_price });
  };

  removeCart = () => {};

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
              · 모나위 배송상품과 업체배송상품은 배송비가 별도로 부과되며,
              산간도서지역은 추가 배송비가 발생됩니다.
            </li>
            <li>
              · 장바구니에 담긴 상품은 최대 30일까지 보관되며 30일 경과 시 자동
              삭제됩니다.
            </li>
          </ul>
        </div>
        <div className="formArea">
          <form>
            <fieldset className="listField">
              <table>
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
                    <th colspan="2">상품명</th>
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
                        <img
                          alt="productImg"
                          src="https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/goods/MG000003497/main/MG000003497_REP_THUMB_80X80_20191206103813.blob"
                        />
                      </figure>
                    </td>
                    <td>
                      <div className="infoArea">
                        <div>153 블라썸</div>
                        <div className="txtOption">비올라(Viola)</div>
                      </div>
                    </td>
                    <td className="txtRight">
                      <em>{this.state.product_price}</em>원
                    </td>
                    <td>
                      <div className="eaArea">
                        <div className="btnDown" onClick={this.removeCnt}>
                          <i class="fas fa-minus"></i>
                        </div>
                        <input
                          type="text"
                          className="goodsCnt"
                          value={this.state.product_amount}
                          maxLength="4"
                        />
                        <div className="btnUp" onClick={this.addCnt}>
                          <i class="fas fa-plus"></i>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="changeCntBtn"
                        onClick={this.changeCnt}
                      >
                        변경
                      </button>
                    </td>
                    <td className="txtRight">
                      <em className="payPrice">
                        {this.state.totalPricebyProduct}
                      </em>
                      원<small className="discountPrice">(0원)</small>
                    </td>
                    <td>
                      <small>모나위배송</small>
                    </td>
                    <td rowSpan="1" className="txtRight">
                      <em>0</em>원
                    </td>
                    <td className="order">
                      <button
                        type="button"
                        className="orderBtn"
                        onclick={this.orderCheck}
                      >
                        바로주문
                      </button>
                      <button
                        type="button"
                        className="deleteBtn"
                        onclick={this.removeCart}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="selectBtnArea">
                <label>
                  <input
                    type="checkbox"
                    class="small"
                    className="chkCartAll2"
                  />
                </label>
                <button
                  type="button"
                  className="addWishList"
                  onclick={this.addWishList}
                >
                  찜하기
                </button>
                <button
                  type="button"
                  className="dltCheckedItem"
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
                className="orderCheckedItem"
                onclick={this.orderSelected}
              >
                선택상품주문
              </button>
              <button
                type="button"
                className="orderAllItem"
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
