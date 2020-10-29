import React, { Component } from "react";
import "./JoinStepOne.scss";

export default class JoinStepOne extends Component {
  constructor() {
    super();
    this.state = {
      allChk: false,
      sub01Chk: false,
      sub02Chk: false,
      sub03Chk: false,
      is01ContentOpened: true,
      is02ContentOpened: false,
      is03ContentOpened: false,
      is01IconClicked: true,
      is02IconClicked: false,
      is03IconClicked: false
    };
  }

  handleAllChk = () => {
    this.setState({
      allChk: !this.state.allChk
    });
  };

  handlesub01Chk = () => {
    this.setState({
      sub01Chk: !this.state.sub01Chk
    });
  };

  handlesub02Chk = () => {
    this.setState({
      sub02Chk: !this.state.sub02Chk
    });
  };

  handlesub03Chk = () => {
    this.setState({
      sub03Chk: !this.state.sub03Chk
    });
  };

  gotoNextStep = () => {
    const { allChk, sub01Chk, sub02Chk, sub03Chk } = this.state;
    allChk || (sub01Chk && sub02Chk && sub03Chk)
      ? this.props.history.push("/JoinStepTwo")
      : alert("서비스 이용약관에 동의해 주세요.");
  };

  gotoPreviousStep = () => {
    this.props.history.push("/Welcome");
  };

  open01Content = () => {
    this.setState({
      is01ContentOpened: !this.state.is01ContentOpened,
      is01IconClicked: !this.state.is01IconClicked
    });
  };

  open02Content = () => {
    this.setState({
      is02ContentOpened: !this.state.is02ContentOpened,
      is02IconClicked: !this.state.is02IconClicked
    });
  };

  open03Content = () => {
    this.setState({
      is03ContentOpened: !this.state.is03ContentOpened,
      is03IconClicked: !this.state.is03IconClicked
    });
  };

  render() {
    const { is01IconClicked, is02IconClicked, is03IconClicked } = this.state;
    return (
      <div className="JoinStepOne">
        <h2>회원가입</h2>
        <div className="step1Wrapper">
          <div className="step">
            <span className="currentStep">
              STEP1. 약관동의
              <i className="fas fa-chevron-right"></i>
            </span>
            <span>
              STEP2. 회원가입
              <i className="fas fa-chevron-right"></i>
            </span>
            <span>STEP3. 가입완료</span>
          </div>
          <form className="step1Form">
            <fieldset className="joinAgreeField">
              <label className="allCheck">
                <input
                  type="checkbox"
                  class="small"
                  name="allChk"
                  className="allAgree"
                  onClick={this.handleAllChk}
                />
                <span>
                  모나위몰 회원서비스 이용약관, 개인정보수집에 모두 동의합니다.
                </span>
              </label>
              <ul>
                <li className="agree1Active">
                  <div className="wrapper">
                    <label>
                      <input
                        type="checkbox"
                        class="small"
                        name="subChk"
                        className="serviceUse"
                        checked={this.state.allChk || this.state.sub01Chk}
                        onClick={this.handlesub01Chk}
                      />
                      <span>서비스 이용약관(필수)</span>
                    </label>
                    <button
                      type="button"
                      className="btnMore"
                      onClick={this.open01Content}
                    >
                      <i
                        class={
                          is01IconClicked
                            ? "fas fa-chevron-up"
                            : "fas fa-chevron-down"
                        }
                      ></i>
                    </button>
                  </div>
                  <div className="scrollWrapper">
                    <div
                      className={
                        this.state.is01ContentOpened
                          ? "scrollbar"
                          : "scrollbarError"
                      }
                    >
                      <div className="innerContent">
                        <h3>[이용약관]</h3>
                        <br />
                        <strong>제1조 (목적)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br />
                        <strong>제2조 (정의)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br />
                        <strong>제2조 (정의)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br />
                        <strong>제2조 (정의)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br />
                        <strong>제2조 (정의)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                      </div>
                    </div>
                  </div>
                </li>
                <li className="agree2Active">
                  <div className="wrapper">
                    <label>
                      <input
                        type="checkbox"
                        class="small"
                        name="subChk"
                        className="privacyCollection"
                        checked={this.state.allChk || this.state.sub02Chk}
                        onClick={this.handlesub02Chk}
                      />
                      <span>개인정보수집/이용동의(필수)</span>
                    </label>
                    <button
                      type="button"
                      className="btnMore"
                      onClick={this.open02Content}
                    >
                      <i
                        class={
                          is02IconClicked
                            ? "fas fa-chevron-up"
                            : "fas fa-chevron-down"
                        }
                      ></i>
                    </button>
                  </div>
                  <div className="scrollWrapper">
                    <div
                      className={
                        this.state.is02ContentOpened
                          ? "scrollbar"
                          : "scrollbarError"
                      }
                    >
                      <div className="innerContent">
                        <h3>[개인정보의 수집 항목 및 이용 목적]</h3>
                        <br />
                        회사는 다양하고 편리한 서비스를 제공하기 위해 아래의
                        정보를 고객의 동의를 받아 수집할 수 있으며 선택사항의
                        동의를 거부하시는 경우에도 회원가입 및 구매결제 등
                        필수서비스는 이용할 수 있습니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br />
                        <strong>제2조 (정의)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br />
                        <strong>제2조 (정의)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br />
                        <strong>제2조 (정의)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                      </div>
                    </div>
                  </div>
                </li>
                <li className="agree3Active">
                  <div className="wrapper">
                    <label>
                      <input
                        type="checkbox"
                        class="small"
                        name="subChk"
                        className="privacyUsage"
                        checked={this.state.allChk || this.state.sub03Chk}
                        onClick={this.handlesub03Chk}
                      />
                      <span>개인정보취급/위탁동의(필수)</span>
                    </label>
                    <button
                      type="button"
                      className="btnMore"
                      onClick={this.open03Content}
                    >
                      <i
                        class={
                          is03IconClicked
                            ? "fas fa-chevron-up"
                            : "fas fa-chevron-down"
                        }
                      ></i>
                    </button>
                  </div>
                  <div className="scrollWrapper">
                    <div
                      className={
                        this.state.is03ContentOpened
                          ? "scrollbar"
                          : "scrollbarError"
                      }
                    >
                      <div className="innerContent">
                        <h3>[개인정보의 수집 항목 및 이용 목적]</h3>
                        <br />
                        회사는 다양하고 편리한 서비스를 제공하기 위해 아래의
                        정보를 고객의 동의를 받아 수집할 수 있으며 선택사항의
                        동의를 거부하시는 경우에도 회원가입 및 구매결제 등
                        필수서비스는 이용할 수 있습니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br />
                        <strong>제2조 (정의)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br />
                        <strong>제2조 (정의)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                        <br />
                        <strong>제2조 (정의)</strong>
                        <br />이 약관은 (주)모나위 회사(전자상거래 사업자)가
                        운영하는 (주)모나위 사이버 몰(이하 “몰”이라 한다)에서
                        제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                        이용함에 있어 사이버 몰과 이용자의 권리·의무 및
                        책임사항을 규정함을 목적으로 합니다.
                        <br />
                        ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                        성질에 반하지 않는 한 이 약관을 준용합니다.」
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="buttonArea">
                <button className="cancleBtn" onClick={this.gotoPreviousStep}>
                  취소
                </button>
                <button className="confirmBtn" onClick={this.gotoNextStep}>
                  확인
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
