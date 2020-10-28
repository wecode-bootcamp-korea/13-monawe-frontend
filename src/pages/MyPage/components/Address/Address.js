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
                <li>자취방</li>
                <li>(기본 배송지)</li>
              </ul>
            </div>
          </div>
        </td>
        <td width="50%" className="td-address">
          <ul>
            <li>(05053)</li>
            <li>서울 광진구 아차산로 312 (자양동, 드림타운)</li>
            <li>303호</li>
          </ul>
        </td>
        <td className="td-phone-number">010-4003-5298</td>
        <td className="td-edit">
          <button onClick={() => this.props.toggleModal()}>수정</button>
        </td>
      </tr>
    );
  }
}

export default Address;
