import React, { Component } from "react";

export default class AddCart extends Component {
  render() {
    const {
      product_name,
      product_thumbnail,
      product_bodycolor,
      product_price,
      product_amount,
      product_company,
      product_option_id,
      priceByEach,
      calPrice,
      removeCnt,
      addCnt,
      changeCnt,
      removeCart,
      total_price
    } = this.props;
    return (
      <tr>
        <td>
          <label>
            <input
              type="checkbox"
              class="small"
              className="cartIdx_0"
              onClick={calPrice}
            />
          </label>
        </td>
        <td>
          <figure>
            <img alt="productImg" src={product_thumbnail} />
          </figure>
        </td>
        <td>
          <div className="infoArea">
            <div>{product_name}</div>
            <div className="txtOption">{product_bodycolor}</div>
          </div>
        </td>
        <td className="txtRight">
          <em>{product_price}</em>원
        </td>
        <td>
          <div className="eaArea">
            <div className="btnDown" onClick={removeCnt}>
              <i class="fas fa-minus"></i>
            </div>
            <input
              type="text"
              className="goodsCnt"
              value={product_amount}
              maxLength="4"
            />
            <div className="btnUp" onClick={addCnt}>
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <button type="button" className="changeCntBtn" onClick={changeCnt}>
            변경
          </button>
        </td>
        <td className="txtRight">
          <em className="payPrice">{total_price}</em>원
          <small className="discountPrice">(0원)</small>
        </td>
        <td>
          <small>{product_company}</small>
        </td>
        <td rowSpan="1" className="txtRight">
          <em>0</em>원
        </td>
        <td className="order">
          <button type="button" className="orderBtn">
            바로주문
          </button>
          <button type="button" className="deleteBtn" onClick={removeCart}>
            삭제
          </button>
        </td>
      </tr>
    );
  }
}
