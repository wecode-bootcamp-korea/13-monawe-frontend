import React, { Component } from "react";
import Address from "./Address";
import AddressModal from "./AddressModal";
import "./AddressList.scss";

export class AddressList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalMode: "add",
      modalDisplay: false,
      addressList: []
    };
  }

  componentDidMount() {
    fetch("http://10.58.1.8:8000/user/address", {
      headers: new Headers({
        Authorization: localStorage.getItem("token")
      })
    })
      .then(res => res.json())
      .then(res =>
        res.data?.forEach(element => {
          this.setState({ addressList: [...this.state.addressList, element] });
        })
      );
  }

  deleteAddress = id => {
    fetch("http://10.58.1.8:8000/user/address", {
      method: "DELETE",
      body: JSON.stringify({
        address_id: id
      }),
      headers: new Headers({
        Authorization: localStorage.getItem("token")
      })
    }).then(res => {
      if (res.status === 202) {
        this.setState({
          addressList: this.state.addressList.filter(
            address => address.id !== id
          )
        });
      } else {
        alert("주소를 삭제하지 못 했습니다.");
      }
    });
  };

  addAddress = () => {
    fetch("http://10.58.1.8:8000/user/address", {
      headers: new Headers({
        Authorization: localStorage.getItem("token")
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ addressList: [] });
        res.data.forEach(element => {
          this.setState({ addressList: [...this.state.addressList, element] });
        });
      });
  };

  toggleModal = (mode, address) => {
    this.setState({
      modalDisplay: !this.state.modalDisplay,
      modalMode: mode,
      address: address
    });
  };

  render() {
    return (
      <div className="mgm-address-list">
        <h2>배송지관리</h2>
        <div className="default-address">
          <div className="default-address-name">
            <ul>
              <li>{this.state.addressList[0]?.name}</li>
              <li>
                {this.state.addressList[0]?.is_default ? "기본배송지" : ""}
              </li>
            </ul>
          </div>
          <div className="default-address-info">
            <ul>
              <li>({this.state.addressList[0]?.zip_code})</li>
              <li>{this.state.addressList[0]?.address}</li>
              <li>{this.state.addressList[0]?.detailed_address}</li>
            </ul>
            <button
              onClick={() =>
                this.toggleModal("edit", {
                  id: this.state.addressList[0]?.id,
                  name: this.state.addressList[0]?.name,
                  address: this.state.addressList[0]?.address,
                  detailedAddress: this.state.addressList[0]?.detailed_address,
                  zipCode: this.state.addressList[0]?.zip_code,
                  phoneNumber: this.state.addressList[0]?.phone_number
                })
              }
            >
              수정
            </button>
          </div>
        </div>
        <table className="address-table">
          <thead>
            <th>배송지명</th>
            <th>주소</th>
            <th>연락처</th>
            <th>관리</th>
          </thead>
          {this.state.addressList.map(address => {
            return (
              <Address
                key={address.id}
                id={address.id}
                name={address.name}
                phoneNumber={address.phone_number}
                isDefault={address.is_default}
                zipCode={address.zip_code}
                address={address.address}
                detailedAddress={address.detailed_address}
                toggleModal={this.toggleModal}
                deleteAddress={this.deleteAddress}
              />
            );
          })}
        </table>
        <div className="bottom-button">
          <button
            className="add-address-button"
            onClick={() => this.toggleModal("add")}
          >
            배송지 추가
          </button>
          <button className="set-default-button">기본배송지 설정</button>
        </div>
        <AddressModal
          display={this.state.modalDisplay}
          toggle={this.toggleModal}
          mode={this.state.modalMode}
          address={this.state.address}
          addAddress={this.addAddress}
        />
      </div>
    );
  }
}

export default AddressList;
