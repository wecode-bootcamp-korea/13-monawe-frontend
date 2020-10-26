import React, { Component } from "react";
import "./MainBanner.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

class Arrow extends Component {
  render() {
    let className = this.props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char =
      this.props.type === "next" ? (
        <i className="fas fa-chevron-right"></i>
      ) : (
        <i className="fas fa-chevron-left"></i>
      );
    return (
      <span className={className} onClick={this.props.onClick}>
        {char}
      </span>
    );
  }
}

class MainBanner extends Component {
  constructor() {
    super();
    this.state = { currentSlideIndex: 0 };
  }

  customPaging = (pagi, i) => {
    const dot = pagi + 1;
    const dotActive = [
      "1. 153 CLIP",
      "2. 2021 몰스킨",
      "3. 유성매직 x LOVE PLANET",
      "4. 컬러 리얼 브러쉬",
      "5. 모나미 x 하비풀",
      "6. 153 네오 아트",
      "7. FX ZETA PAstel Pearl",
      "8. 153 네오 만년필 DIY 세트"
    ];
    if (pagi === this.state.currentSlideIndex && pagi === 0) {
      return <div className="txtDots">{dotActive[0]}</div>;
    }
    if (pagi === this.state.currentSlideIndex && pagi === 1) {
      return <div className="txtDots">{dotActive[1]}</div>;
    }
    if (pagi === this.state.currentSlideIndex && pagi === 2) {
      return <div className="txtDots">{dotActive[2]}</div>;
    }
    if (pagi === this.state.currentSlideIndex && pagi === 3) {
      return <div className="txtDots">{dotActive[3]}</div>;
    }
    if (pagi === this.state.currentSlideIndex && pagi === 4) {
      return <div className="txtDots">{dotActive[4]}</div>;
    }
    if (pagi === this.state.currentSlideIndex && pagi === 5) {
      return <div className="txtDots">{dotActive[5]}</div>;
    }
    if (pagi === this.state.currentSlideIndex && pagi === 6) {
      return <div className="txtDots">{dotActive[6]}</div>;
    }
    if (pagi === this.state.currentSlideIndex && pagi === 7) {
      return <div className="txtDots">{dotActive[7]}</div>;
    } else {
      return <div>{dot}</div>;
    }
  };

  appendDots = dots => {
    return (
      <div>
        <ul> {dots} </ul>
      </div>
    );
  };

  render() {
    const Slides = [
      {
        src: "images/MainBanner_grey.png",
        main01Txt: "153의 작은변화",
        main02Txt: "153 CLIP",
        sub01Txt: "클립으로 노트나 주머니에 끼워",
        sub02Txt: "보관하기 편한 153 클립"
      },
      {
        src: "images/MainBanner_purple.png",
        main01Txt: "2021 몰스킨",
        main02Txt: "얼리버드 10% 할인 ",
        sub01Txt: "단순하지만 완벽한 노트북",
        sub02Txt: "몰스킨을 만나보세요"
      },
      {
        src: "images/MainBanner_pink.png",
        main01Txt: "마법처럼 사랑을 전하는",
        main02Txt: "유성매직 x LOVE PLANET",
        sub01Txt: "열 두가지 행성 아이콘이 새겨진",
        sub02Txt: "새로운 패키지 제품"
      },
      {
        src:
          "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/stationerymain/banner/49/2020092109073805654.jpg",
        main01Txt: "컬러 리얼 브러쉬",
        main02Txt: "6색 세트",
        sub01Txt: "펜으로 그리는 감성 수채화",
        sub02Txt: ""
      },
      {
        src:
          "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/stationerymain/banner/49/2020083109030843043.jpg",
        main01Txt: "리제의 모나미 데코마카",
        main02Txt: "캘리그라피 클래스",
        sub01Txt: "모나미 X 하비풀",
        sub02Txt: "두 번째 온라인 취미 클래스"
      },
      {
        src:
          "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/stationerymain/banner/49/2020081703280513234.jpg",
        main01Txt: "파스텔 펄 시리즈, 그 두번째",
        main02Txt: "FX ZETA Pastel Pearl",
        sub01Txt: "4본입 출시",
        sub02Txt: ""
      },
      {
        src:
          "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/stationerymain/banner/49/2020081009091572051.jpg",
        main01Txt: "날마다 다른 컬러",
        main02Txt: "153 네오 만년필 DIY",
        sub01Txt: "5가지 컬러로 만드는 매력만점 만년필",
        sub02Txt: ""
      }
    ];
    const renderSlides = () =>
      Slides.map(slide => (
        <>
          <div className="sliderWrapper">
            <img alt="153Clip" src={slide.src} />
          </div>
          <div className="txtWrapper">
            <span>
              {slide.main01Txt}
              <br />
              {slide.main02Txt}
              <small>
                {slide.sub01Txt}
                <br />
                {slide.sub02Txt}
              </small>
            </span>
          </div>
        </>
      ));

    return (
      <div className="MainBanner">
        <Slider
          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}
          dots={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          customPaging={this.customPaging}
          appendDots={this.appendDots}
          beforeChange={(prev, next) => {
            this.setState({ currentSlideIndex: next });
          }}
        >
          {renderSlides()}
        </Slider>
      </div>
    );
  }
}

export default MainBanner;
