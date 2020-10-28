import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AddressModal.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export class AddressModal extends Component {
  render() {
    let modalClass = this.props.display ? "mgm-modal-wrapper" : "modal-hidden";
    return (
      <div className={modalClass}>
        <div className="modal-inner">
          <div className="modal-title">
            <h2>배송지추가</h2>
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              onClick={() => this.props.toggle()}
            />
          </div>
          <table className="modal-table">
            <tr>
              <td className="td-fixed">배송지명</td>
              <td className="td-auto">
                <input className="width100p" type="text" />
              </td>
            </tr>
            <tr>
              <td className="td-fixed">이름</td>
              <td className="td-auto">
                <input className="width100p" type="text" />
              </td>
            </tr>
            <tr>
              <td className="td-fixed">휴대폰번호</td>
              <td className="td-auto">
                <input className="width100p" type="text" />
              </td>
            </tr>
            <tr>
              <td className="td-fixed">주소</td>
              <td className="td-auto">
                <input className="width65p" type="text" disabled />
                <button className="width20p">주소찾기</button>
              </td>
            </tr>
            <tr>
              <td className="td-fixed"></td>
              <td className="td-auto">
                <input className="width100p" type="text" disabled />
              </td>
            </tr>
            <tr>
              <td className="td-fixed"></td>
              <td className="td-auto">
                <input className="width100p" type="text" />
              </td>
            </tr>
          </table>
          <div className="checkbox-default">
            <input type="checkbox" />
            <span>기본 배송지로 저장</span>
          </div>
          <div className="modal-bottom-button">
            <button
              className="cancel-button"
              onClick={() => this.props.toggle()}
            >
              취소
            </button>
            <button className="accept-button">확인</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressModal;
