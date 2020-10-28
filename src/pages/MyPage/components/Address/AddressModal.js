import React, { Component } from "react";
import "./AddressModal.scss";

export class AddressModal extends Component {
  render() {
    let modalClass = this.props.display ? "mgm-modal-wrapper" : "modal-hidden";
    return (
      <div className={modalClass}>
        <div className="modal-inner">
          <div className="modal-title">
            <h2>배송지추가</h2>
            <i onClick={() => this.props.toggle()}>X</i>
          </div>
          <table className="modal-table">
            <tr>
              <td>배송지명</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <input type="text" />
                <button>주소찾기</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default AddressModal;
