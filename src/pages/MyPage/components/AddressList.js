import React, { Component } from "react";
import Address from "./Address";
import "./AddressList.scss";

export class AddressList extends Component {
  render() {
    return (
      <div className="mgm-address-list">
        <h2>배송지관리</h2>
        <div className="default-address">
          <div className="default-address-name">
            <ul>
              <li>{"자취방"}</li>
              <li>(기본배송지)</li>
            </ul>
          </div>
          <div className="default-address-info">
            <ul>
              <li>{"05053"}</li>
              <li>{"서울 광진구 아차산로 312(자양동, 드림타운)"}</li>
              <li>{"303호"}</li>
            </ul>
            <button>수정</button>
          </div>
        </div>
        <table className="address-table">
          <thead>
            <th>배송지명</th>
            <th>주소</th>
            <th>연락처</th>
            <th>관리</th>
          </thead>
          <Address />
          <Address />
          <Address />
        </table>
        <div className="bottom-button">
          <button className="add-address-button">배송지 추가</button>
          <button className="set-default-button">기본배송지 설정</button>
        </div>
      </div>
    );
  }
}

export default AddressList;
