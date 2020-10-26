import React, { Component } from "react";
import "./JoinStepThree.scss";

export default class JoinStepThree extends Component {
  render() {
    return (
      <div className="JoinStepThree">
        <h2>회원가입</h2>
        <div className="stepWrapper">
          <div className="step">
            <span>
              STEP1. 약관동의
              <i className="fas fa-chevron-right"></i>
            </span>
            <span>
              STEP2. 회원가입
              <i className="fas fa-chevron-right"></i>
            </span>
            <span className="currentStep">STEP3. 가입완료</span>
          </div>
          <div className="signupComplete">
            <p>WELCOME! 회원가입이 완료되었습니다.</p>
            <button onClick={() => this.props.history.push("/")}>
              메인으로
            </button>
          </div>
          <div className="couponArea">
            <div className="description">신규회원 공통 혜택</div>
            <ul className="couponDetail">
              <li className="newmemberCoupon">
                <div className="couponCondition">할인</div>
                <div className="discountPercentage">10%</div>
                <div className="couponName">신규 회원가입 쿠폰</div>
              </li>
              <li className="birthdayCoupon">
                <div className="couponCondition">할인</div>
                <div className="discountPercentage">10%</div>
                <div className="couponName">생일 쿠폰</div>
              </li>
              <li className="mypetCoupon">
                <div className="couponCondition">할인</div>
                <div className="discountPercentage">10%</div>
                <div className="couponName">마이펫 생일 쿠폰</div>
              </li>
            </ul>
            <button> 회원혜택 자세히 보기</button>
          </div>
          <div className="membershipArea">
            <div className="description">멤버쉽 정보 등록</div>
            <p>
              모나위몰의 멤버쉽 정보를 등록 하시면, 다양한 서비스를 이용하실 수
              있습니다.
            </p>
          </div>
          <ul className="membershipDetail">
            <li className="mypetRegister">
              <i class="fas fa-cat"></i>
              <div className="membershipDescription">
                마이펫을 위한 맞춤 서비스 제공
              </div>
              <div className="membershipName">마이펫 등록</div>
            </li>
            <li className="childRegister">
              <i className="fas fa-baby"></i>
              <div className="membershipDescription">
                14세 미만 자녀의 모나미몰 서비스 이용
              </div>
              <div className="membershipName">자녀 등록</div>
            </li>
            <li className="clubRegister">
              <i class="fas fa-user-friends"></i>
              <div className="membershipDescription">
                가족, 친구, 연인끼리 클럽으로 공유
              </div>
              <div className="membershipName">클럽 등록</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
