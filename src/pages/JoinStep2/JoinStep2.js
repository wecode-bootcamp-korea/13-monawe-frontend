import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JoinStep2.scss";

class JoinStep2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      account: "",
      password: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: 19951116,
      emailAgreement: false,
      smsAgreement: false,
      //여기서부터 백에 전달 안함
      confirmPw: "",
      isNameNull: true,
      isAccountNull: true,
      isPasswordNull: true,
      isEmailNull: true,
      isPhoneNumberNull: true
    };
  }

  /*const APIforIdCheck = "http://localhost:3000/data/account.json";
    const {
      account,
    } = this.state;
    fetch(APIforIdCheck, {
      method: "POST",
      body: JSON.stringify({
        account: account
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log("백엔드에서 오는 응답 메세지:", result);
      }); */

  handleInput = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  handleSMSCheckbox = e => {
    const { name } = e.target;
    this.setState({
      [name]: !this.state.smsAgreement
    });
    console.log(this.state);
  };

  handleEmailCheckbox = e => {
    const { name } = e.target;
    this.setState({
      [name]: !this.state.emailAgreement
    });
    console.log(this.state);
  };

  checkValidation = e => {
    e.preventDefault();
    const {
      name,
      account,
      password,
      confirmPw,
      email,
      phoneNumber,
      dateOfBirth,
      smsAgreement,
      emailAgreement
    } = this.state;
    const isEssentialInfoValid =
      name !== "" &&
      account !== "" &&
      password !== "" &&
      email !== "" &&
      phoneNumber !== "";
    console.log("필수정보 모두 기입?", isEssentialInfoValid);
    const isPasswordSame = password === confirmPw;
    console.log("비밀번호가 같은가요?", isPasswordSame);

    const isPwInfoValid = password => {
      let number = /[0-9]/g;
      let character = /[a-zA-z]/g;
      let specialCharacter = /\W|_/g;
      const isNumIncluded = password.match(number) ? true : false;
      const isCharIncluded = password.match(character) ? true : false;
      const isSpecialCharIncluded = password.match(specialCharacter)
        ? true
        : false;
      const isPwLong = password.length >= 6 && password.length <= 16;
      if (
        ((isNumIncluded && isSpecialCharIncluded) ||
          (isNumIncluded && isCharIncluded) ||
          (isCharIncluded && isSpecialCharIncluded)) &&
        isPwLong
      ) {
        return true;
      } else return false;
    };
    console.log("비밀번호 valid?", isPwInfoValid(password));

    const isIdValid = account.length >= 5 && account.length <= 16;
    console.log("아이디 valid?", isIdValid);

    if (name === "") {
      this.setState({
        isNameNull: false
      });
    } else {
      this.setState({
        isNameNull: true
      });
    }
    if (account === "") {
      this.setState({
        isAccountNull: false
      });
    } else {
      this.setState({
        isAccountNull: true
      });
    }
    if (password === "") {
      this.setState({
        isPasswordNull: false
      });
    } else {
      this.setState({
        isPasswordNull: true
      });
    }
    if (email === "") {
      this.setState({
        isEmailNull: false
      });
    } else {
      this.setState({
        isEmailNull: true
      });
    }
    if (phoneNumber === "") {
      this.setState({
        isPhoneNumberNull: false
      });
    } else {
      this.setState({
        isPhoneNumberNull: true
      });
    }
    if (
      isEssentialInfoValid &&
      isPasswordSame &&
      isPwInfoValid(password) &&
      isIdValid
    ) {
      const APIforRegister = "http://localhost:3000/data/register.json";
      fetch(APIforRegister, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          account: account,
          password: password,
          email: email,
          phoneNumber: phoneNumber,
          dateOfBirth: dateOfBirth,
          smsAgreement: smsAgreement,
          emailAgreement: emailAgreement
        })
      })
        .then(response => response.json())
        .then(result => {
          //console.log("백엔드에서 오는 응답 메세지:", result);
          if (this.checkValidation && result.success) {
            alert("회원가입 완료");
            this.props.history.push("/");
          }
        });
    } else {
      alert("회원가입 양식을 확인하세요.");
    }
  };

  render() {
    const {
      isNameNull,
      isAccountNull,
      isPasswordNull,
      isEmailNull,
      isPhoneNumberNull
    } = this.state;
    return (
      <main className="JoinStep2">
        <h2>회원가입</h2>
        <div className="step2Wrapper">
          <div className="step">
            <span>
              STEP1. 약관동의
              <i className="fas fa-chevron-right"></i>
            </span>
            <span>
              STEP2. 회원가입
              <i className="fas fa-chevron-right"></i>
            </span>
            <span>STEP3. 가입완료</span>
          </div>
          <div className="userInfoField">
            <div className="description">
              <h3>회원기본정보</h3>
              <p>*표시는 반드시 입력하셔야 하는 항목입니다.</p>
            </div>
            <form>
              <ul>
                <li>
                  <strong>이름 *</strong>
                  <div className="inputWrapper">
                    <input
                      name="name"
                      type="text"
                      placeholder="이름 입력"
                      maxLength="10"
                      onChange={this.handleInput}
                    ></input>
                    <span className={isNameNull ? "idValid" : "idError"}>
                      ⓘ 이름을 입력해주세요.
                    </span>
                  </div>
                </li>
                <li>
                  <strong>아이디 *</strong>
                  <div className="idInputWrapper">
                    <div className="inputWrapper">
                      <input
                        name="account"
                        type="text"
                        placeholder="5~16자, 영문, 숫자 또는 영문+숫자 조합"
                        maxLength="16"
                        onChange={this.handleInput}
                      ></input>
                      <span className={isAccountNull ? "idValid" : "idError"}>
                        ⓘ 아이디를 입력해주세요.
                      </span>
                    </div>
                    <button>중복확인</button>
                  </div>
                </li>
                <li>
                  <strong>비밀번호 *</strong>
                  <div className="inputWrapper">
                    <input
                      name="password"
                      type="password"
                      placeholder="영문/숫자/특수문자 중 2가지 조합, 6~16자 이내"
                      maxLength="10"
                      onChange={this.handleInput}
                    ></input>
                    <span className={isPasswordNull ? "idValid" : "idError"}>
                      ⓘ 비밀번호를 입력해주세요.
                    </span>
                  </div>
                </li>
                <li>
                  <strong>비밀번호확인 *</strong>
                  <div className="inputWrapper">
                    <input
                      name="confirmPw"
                      type="password"
                      placeholder="비밀번호 재입력"
                      maxLength="10"
                      onChange={this.handleInput}
                    ></input>
                  </div>
                </li>
                <li>
                  <strong>이메일 *</strong>
                  <div className="emailInputWrapper">
                    <div className="inputWrapper">
                      <input
                        name="email"
                        type="text"
                        placeholder="이메일 입력"
                        maxLength="50"
                        onChange={this.handleInput}
                      ></input>
                      <span className={isEmailNull ? "idValid" : "idError"}>
                        ⓘ 이메일을 입력해주세요.
                      </span>
                    </div>
                    <button>중복확인</button>
                  </div>
                </li>
                <li>
                  <strong>휴대폰번호 *</strong>
                  <div className="inputWrapper">
                    <input
                      name="phoneNumber"
                      type="number"
                      placeholder="숫자만 입력(11자리)"
                      maxLength="11"
                      onChange={this.handleInput}
                    ></input>
                    <span className={isPhoneNumberNull ? "idValid" : "idError"}>
                      ⓘ 휴대폰번호를 입력해주세요.
                    </span>
                  </div>
                </li>
                <li>
                  <strong>생년월일</strong>
                  <div className="inputWrapper">
                    <input
                      name="dateOfBirth"
                      type="text"
                      placeholder="숫자만 입력(8자리)"
                      maxLength="8"
                      onChange={this.handleInput}
                    ></input>
                  </div>
                </li>
                <li>
                  <strong>수신동의</strong>
                  <div className="txtAgreement">
                    <span>
                      <input
                        name="smsAgreement"
                        type="checkbox"
                        value="smsAgreement"
                        onChange={this.handleSMSCheckbox}
                      ></input>
                      <label htmlFor="smsAgreement">
                        SMS를 통한 상품 및 이벤트 정보 수신에 동의 합니다.[선택]
                      </label>
                    </span>
                    <span>
                      <input
                        name="emailAgreement"
                        type="checkbox"
                        value="emailAgreement"
                        onChange={this.handleEmailCheckbox}
                      ></input>
                      <label htmlFor="emailAgreement">
                        이메일을 통한 상품 및 이벤트 정보 수신에 동의
                        합니다.[선택]
                      </label>
                    </span>
                    <p>
                      * SMS 및 이메일 수신동의와 무관하게 주문결제/회원 관련
                      안내 메일/문자는 발송되며 수신미동의 시 쇼핑몰 이용에
                      제약은 없습니다.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="buttonArea">
                <button className="cancleBtn">취소</button>
                <button
                  className="confirmBtn"
                  onClick={e => this.checkValidation(e)}
                >
                  확인
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default JoinStep2;
