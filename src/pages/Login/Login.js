import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <main className="Welcome">
        <h2>로그인</h2>
        <div className="snsJoin">
          <h3>SNS회원가입</h3>
          <ul>
            <button>
              <img
                alt="NAVER"
                src="https://clova-phinf.pstatic.net/MjAxODAzMjlfOTIg/MDAxNTIyMjg3MzM3OTAy.WkiZikYhauL1hnpLWmCUBJvKjr6xnkmzP99rZPFXVwgg.mNH66A47eL0Mf8G34mPlwBFKP0nZBf2ZJn5D4Rvs8Vwg.PNG/image.png"
              />
              <span>NAVER</span>
            </button>
            <button>
              <img
                alt="KAKAO"
                src="https://i0.wp.com/forhappywomen.com/wp-content/uploads/2018/11/%EC%82%B0%EB%B6%80%EC%9D%B8%EA%B3%BC-%ED%8F%AC%ED%95%B4%ED%94%BC%EC%9A%B0%EB%A8%BC-%EB%AC%B8%EC%9D%98-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%8C%EB%9F%AC%EC%8A%A4%EC%B9%9C%EA%B5%AC-%EB%B2%84%ED%8A%BC.png?resize=586%2C586&ssl=1"
              />
              <span>KAKAO</span>
            </button>
            <button>
              <img
                alt="FACEBOOK"
                src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
              />
              <span>FACEBOOK</span>
            </button>
          </ul>
        </div>
      </main>
    );
  }
}

export default Login;
