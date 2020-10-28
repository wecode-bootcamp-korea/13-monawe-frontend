import React, { Component } from "react";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerTop">
          <div className="container">
            <div className="notice">
              <div className="spaceBetween strong marginBottom14">
                <div>공지사항</div>
                <div className="plusIcon"></div>
              </div>
              <ul>
                <li>
                  <div>
                    <span className="textSubject">
                      네임펜 제품가격 인상안내
                    </span>
                    <span>2020.08.05</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>서비스 개편 및 간편 결제 서비스 추가</span>
                    <span>2020.09.11</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>모나미몰 이용약관 개정 안내</span>
                    <span>2020.10.05</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="customor">
              <span>
                <div className="marginBottom14 strong">고객지원센터 {">"}</div>
              </span>
              <div className="spaceBetween">
                <div>
                  <div className="font24 marginBottom8 strong">1544-2884</div>
                  <div className="marginBottom8">
                    평일08:30~17:30(점심시간 12:00~13:00)
                  </div>
                  <div>주말/공휴일: 휴무</div>
                </div>
                <div>
                  <button>카카오톡문의 {">"}</button>
                  <button>1:1 상담문의 {">"}</button>
                </div>
              </div>
            </div>
            <div className="helper">
              <strong>
                <div className="marginBottom20">소통과 체험의 복합공간</div>
                <div className="font20 strong">모나미 스토어</div>
              </strong>
              <button>스토어 보러가기 {">"}</button>
            </div>
            <div className="sns">
              <div className="marginBottom20">모나미 공식 SNS</div>
              <ul>
                <li>
                  <div className="instagram">모나미펫 인스타그램</div>
                </li>
                <li>
                  <div className="instagram">모나미 인스타그램</div>
                </li>
                <li>
                  <div className="facebook">페이스북</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerBottom spaceBetween container">
          <div className="bottom1">
            <span>monawe</span>
            <span>mall</span>
          </div>
          <div className="info">
            <div>
              <ul className="spaceBetween">
                <li>
                  <div>회사소개</div>
                </li>
                <li>
                  <div>이용약관</div>
                </li>
                <li>
                  <div>개인정보처리방침</div>
                </li>
                <li>
                  <div>사업자 정보확인</div>
                </li>
                <li>
                  <div>제휴/입점 안내</div>
                </li>
              </ul>
              <div>
                (주)모나미 | 대표 : 민경민 | 주소 : 서울시 광진구 지구 노로 17 |
                사업자등록번호 : 101-22-01004
              </div>
              <div className="marginBottom20">
                고객센터 : 4451-4882 | 개인정보관리책임자 :
                민경민(monawehelp@monami.com) | 통신판매업신고 :
                제5001-서울광진-0191
              </div>
              <div>
                본 사이트의 모든 저작물의 저작권은 (주)모나위에 있습니다.
              </div>
              <div className="marginBottom20">
                무단 복제나 도용은 저작권법 제 97조 5항에 의해 법으로 금지되어
                있습니다.
              </div>
              <div>Copyright(c) (주)모나위 All rights Reserved.</div>
            </div>
          </div>
          <div className="family">
            <select name="" id="">
              <option value="">패밀리 사이트</option>
              <option value="">모나르때</option>
              <option value="">모나미 컨샙스토어</option>
            </select>
            <div className="marginBottom8 strong">
              이니시스(에스크로) 서비스
            </div>
            <div>
              고객님은 안전거래를 위해 모든 거래 결제 시 저희 쇼핑몰에서 가입한
              전자 결제의 매매보호(에스크로) 서비스를 이용하실 수 있습니다.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
