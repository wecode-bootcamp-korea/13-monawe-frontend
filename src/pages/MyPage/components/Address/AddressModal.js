import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./AddressModal.scss";

export class AddressModal extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      address: "",
      detailedAddress: "",
      phoneNumber: "",
      zipCode: "",
      isDefault: false
    };
    this.baseState = this.state;
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleCheckBox(e) {
    const target = e.target;
    const value = target.checked;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const {
      id,
      name,
      address,
      detailedAddress,
      phoneNumber,
      zipCode,
      isDefault
    } = this.state;

    if (
      name.length === 0 ||
      address.length === 0 ||
      detailedAddress.length === 0 ||
      phoneNumber.length === 0 ||
      zipCode.length === 0
    ) {
      alert("모든 정보를 입력해주세요");
      return;
    }
    if (this.props.mode === "add") {
      fetch("http://10.58.1.8:8000/user/address", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          address: address,
          detailed_address: detailedAddress,
          phone_number: phoneNumber,
          zip_code: zipCode,
          is_default: isDefault
        }),
        headers: new Headers({
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.PEGup6P_OS0B1Wfy6EHL9Np03hdcUuLMDXmrmGNCobQ"
        })
      }).then(res => {
        if (res.status === 200) {
          alert("주소를 추가했습니다.");
          this.props.addAddress();
          this.props.toggle();
        } else {
          alert("주소를 추가하지 못했습니다.");
          this.props.toggle();
        }
      });
    } else {
      fetch("http://10.58.1.8:8000/user/address", {
        method: "PATCH",
        body: JSON.stringify({
          address_id: id,
          name: name,
          address: address,
          detailed_address: detailedAddress,
          phone_number: phoneNumber,
          zip_code: zipCode,
          is_default: isDefault
        }),
        headers: new Headers({
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.PEGup6P_OS0B1Wfy6EHL9Np03hdcUuLMDXmrmGNCobQ"
        })
      }).then(res => {
        if (res.status === 200) {
          alert("주소를 수정 했습니다.");
          this.props.addAddress();
          this.props.toggle();
        } else {
          alert("주소를 수정하지 못했습니다.");
          this.props.toggle();
        }
      });
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.address !== this.props.address) {
      if (this.props.address) {
        this.setState({
          id: this.props.address.id,
          name: this.props.address.name,
          address: this.props.address.address,
          detailedAddress: this.props.address.detailedAddress,
          zipCode: this.props.address.zipCode,
          phoneNumber: this.props.address.phoneNumber
        });
      } else {
        this.setState(this.baseState);
      }
    }
  }

  render() {
    let modalClass = this.props.display ? "mgm-modal-wrapper" : "modal-hidden";
    return (
      <div className={modalClass}>
        <div className="modal-inner">
          <div className="modal-title">
            <h2>{this.props.mode === "add" ? "배송지추가" : "배송지수정"}</h2>
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
                <input
                  className="width100p"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={e => this.handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td className="td-fixed">휴대폰번호</td>
              <td className="td-auto">
                <input
                  className="width100p"
                  type="text"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={e => this.handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td className="td-fixed">주소</td>
              <td className="td-auto">
                <input
                  placeholder="우편번호"
                  className="width65p"
                  type="text"
                  name="zipCode"
                  value={this.state.zipCode}
                  onChange={e => this.handleChange(e)}
                />
                <button className="width20p">주소찾기</button>
              </td>
            </tr>
            <tr>
              <td className="td-fixed"></td>
              <td className="td-auto">
                <input
                  placeholder="기본 주소"
                  className="width100p"
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={e => this.handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td className="td-fixed"></td>
              <td className="td-auto">
                <input
                  placeholder="상세 주소"
                  className="width100p"
                  type="text"
                  name="detailedAddress"
                  value={this.state.detailedAddress}
                  onChange={e => this.handleChange(e)}
                />
              </td>
            </tr>
          </table>
          <div className="checkbox-default">
            <input
              type="checkbox"
              name="isDefault"
              onChange={e => this.handleCheckBox(e)}
            />
            <span>기본 배송지로 저장</span>
          </div>
          <div className="modal-bottom-button">
            <button
              className="cancel-button"
              onClick={() => this.props.toggle()}
            >
              취소
            </button>
            <button
              className="accept-button"
              onClick={() => this.handleSubmit()}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressModal;
