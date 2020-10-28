import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../Config";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      account: "",
      password: ""
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = () => {
    const { account, password } = this.state;
    fetch(`${API}/user/signin`, {
      method: "POST",
      body: JSON.stringify({
        account: account,
        password: password
      })
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === "SIGNIN_SUCCESS") {
          localStorage.setItem("token", result.token);
          localStorage.setItem("name", result.name);
          this.props.history.push("/");
        } else {
          alert(
            "등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력하셨습니다."
          );
        }
      });
  };

  render() {
    return (
<<<<<<< HEAD
      <div className="Welcome">
=======
      <div className="Login">
>>>>>>> f0717016f0fd85dc5cbf06546aa7f3e9256df313
        <h2>로그인</h2>
        <div className="LoginArea">
          <div className="LoginMenu">
            <div className="LoginTap">
              <span className="memberTap">회원</span>
              <span className="nonmemberTap">비회원(주문조회)</span>
            </div>
            <div className="inputArea">
              <div className="inputWrapper">
                <strong>아이디</strong>
                <input
                  name="account"
                  type="text"
                  placeholder="아이디입력"
                  onChange={this.handleInput}
                />
              </div>
              <div className="inputWrapper">
                <strong>비밀번호</strong>
                <input
                  name="password"
                  type="password"
                  placeholder="비밀번호입력"
                  onChange={this.handleInput}
                />
              </div>
              <button onClick={this.handleLogin}>로그인</button>
            </div>
            <div className="findInfo">
              <ul>
                <li>아이디 찾기</li>
                <li>비밀번호 찾기</li>
                <Link className="toJoin" to="/JoinStepOne">
                  <li>회원가입</li>
                </Link>
              </ul>
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
