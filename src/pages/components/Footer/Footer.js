import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="notice">
              <div className="space-between strong margin-bottom-14">
                <div>공지사항</div>
                <Link className="plus-icon"></Link>
              </div>
              <ul>
                <li>
                  <Link>
                    <span className="text-subject">
                      네임펜 제품가격 인상안내
                    </span>
                    <span>2020.08.05</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>서비스 개편 및 간편 결제 서비스 추가</span>
                    <span>2020.09.11</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>모나미몰 이용약관 개정 안내</span>
                    <span>2020.10.05</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="customor">
              <span>
                <div className="margin-bottom-14 strong">
                  고객지원센터 {">"}
                </div>
              </span>
              <div className="space-between">
                <div>
                  <div className="font-24 margin-bottom-8 strong">
                    1544-2884
                  </div>
                  <div className="margin-bottom-8">
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
                <div className="margin-bottom-20">소통과 체험의 복합공간</div>
                <div className="font-20 strong">모나미 스토어</div>
              </strong>
              <button>스토어 보러가기 {">"}</button>
            </div>
            <div className="sns">
              <div className="margin-bottom-20">모나미 공식 SNS</div>
              <ul>
                <li>
                  <Link className="instagram">모나미펫 인스타그램</Link>
                </li>
                <li>
                  <Link className="instagram">모나미 인스타그램</Link>
                </li>
                <li>
                  <Link className="facebook">페이스북</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom space-between container">
          <div className="bottom-1">
            <span>monawe</span>
            <span>mall</span>
          </div>
          <div className="info">
            <div>
              <ul className="space-between">
                <li>
                  <Link>회사소개</Link>
                </li>
                <li>
                  <Link>이용약관</Link>
                </li>
                <li>
                  <Link>개인정보처리방침</Link>
                </li>
                <li>
                  <Link>사업자 정보확인</Link>
                </li>
                <li>
                  <Link>제휴/입점 안내</Link>
                </li>
              </ul>
              <div>
                (주)모나미 | 대표 : 민경민 | 주소 : 서울시 광진구 지구 노로 17 |
                사업자등록번호 : 101-22-01004
              </div>
              <div className="margin-bottom-20">
                고객센터 : 4451-4882 | 개인정보관리책임자 :
                민경민(monawehelp@monami.com) | 통신판매업신고 :
                제5001-서울광진-0191
              </div>
              <div>
                본 사이트의 모든 저작물의 저작권은 (주)모나위에 있습니다.
              </div>
              <div className="margin-bottom-20">
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
            <div className="margin-bottom-8 strong">
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
