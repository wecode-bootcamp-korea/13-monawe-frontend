import React, { Component } from "react";

export class Address extends Component {
  render() {
    return (
      <tr>
        <td className="td-name">
          <div className="td-name-inner">
            <input type="checkbox" />
            <div>
              <ul>
                <li>{this.props.name}</li>
                <li>{this.props.isDefault ? "(기본 배송지)" : ""}</li>
              </ul>
            </div>
          </div>
        </td>
        <td width="50%" className="td-address">
          <ul>
            <li>{this.props.zipCode}</li>
            <li>{this.props.address}</li>
            <li>{this.props.detailedAddress}</li>
          </ul>
        </td>
        <td className="td-phone-number">010-4003-5298</td>
        <td className="td-edit">
          <button onClick={() => this.props.toggleModal()}>수정</button>
          <button
            className="delete-button"
            onClick={() => this.props.deleteAddress(this.props.id)}
          >
            삭제
          </button>
        </td>
      </tr>
    );
  }
}

export default Address;
