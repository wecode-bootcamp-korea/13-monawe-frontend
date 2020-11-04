import React, { Component } from "react";
import AddCart from "./AddCart";
import { API_CY } from "../../Config";
import "./Cart.scss";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      total_sum: 0,
      cartList: []
    };
  }

  componentDidMount() {
    fetch(`${API_CY}/order/cart`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartList: res.product_detail,
          total_sum: res.total_sum
        });
      });
  }

  removeCnt = productNum => {
    this.setState(
      prevState => ({
        cartList: prevState.cartList.map(el =>
          el.product_option_id === productNum
            ? { ...el, product_amount: el.product_amount - 1 }
            : el
        )
      }),
      () => this.calPrice()
    );
  };

  addCnt = productNum => {
    this.setState(
      prevState => ({
        cartList: prevState.cartList.map(el =>
          el.product_option_id === productNum
            ? { ...el, product_amount: el.product_amount + 1 }
            : el
        )
      }),
      () => this.calPrice(),
      () => this.calPriceByItem()
    );
  };

  changeCnt = productNum => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(el =>
        el.product_option_id === productNum
          ? { ...el, total_price: el.product_amount * el.product_price }
          : el
      )
    }));
    let changedAmount = this.state.cartList.filter(
      el => el.product_option_id === productNum
    );

    fetch(`${API_CY}/order/cart/${productNum}`, {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        amount: changedAmount[0].product_amount
      })
    })
      .then(res => res.json())
      .then(res => {});
  };

  removeCart = idx => {
    console.log("패치되니??????");
    fetch(`${API_CY}/order/cart/${idx}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartList: res.product_detail
        });
      });
  };

  calPrice = () => {
    const { cartList } = this.state;
    let totalPayPrice = 0;
    for (let i in cartList) {
      totalPayPrice +=
        cartList[i].product_price * 1 * cartList[i].product_amount * 1;
    }
    this.setState({ total_sum: totalPayPrice });
  };

  calPriceByItem = productNum => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(el =>
        el.product_option_id === productNum
          ? { ...el, total_price: el.product_amount * el.product_price }
          : el
      )
    }));
  };

  render() {
    const { total_sum, cartList } = this.state;
    return (
      <div className="Cart">
        <div className="titleArea">
          <h2>장바구니</h2>
        </div>
        <div className="innerCartContent">
          <h3>일반장바구니 ({cartList.length > 0 ? cartList.length : 0})</h3>
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
          <div className="form">
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
                  {cartList?.map(cart => (
                    <AddCart
                      product_name={cart.product_name}
                      product_thumbnail={cart.product_thumbnail}
                      product_bodycolor={cart.product_bodycolor}
                      product_price={cart.product_price}
                      product_amount={cart.product_amount}
                      product_company={cart.product_company}
                      total_price={cart.total_price}
                      product_option_id={cart.product_option_id}
                      totalPayPrice={this.state.totalPayPrice}
                      calPrice={this.calPrice}
                      removeCnt={() => this.removeCnt(cart.product_option_id)}
                      addCnt={() => this.addCnt(cart.product_option_id)}
                      changeCnt={() => this.changeCnt(cart.product_option_id)}
                      removeCart={() => this.removeCart(cart.product_option_id)}
                      calPriceByItem={() =>
                        this.calPriceByItem(cart.product_option_id)
                      }
                    />
                  ))}
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
                  <em className="totalPrice">
                    {total_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </em>
                  원
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
                  <em className="totalPayPrice">
                    {total_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </em>
                  원
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
          </div>
        </div>
      </div>
    );
  }
}
