import React, { Component } from "react";
import "./MainBanner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Arrow extends Component {
  render() {
    const { type, onClick } = this.props;
    let className = type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char =
      type === "next" ? (
        <i className="fas fa-chevron-right"></i>
      ) : (
        <i className="fas fa-chevron-left"></i>
      );
    return (
      <span className={className} onClick={onClick}>
        {char}
      </span>
    );
  }
}

const Slides = [
  {
    src: "images/MainBanner_purple.png",
    main01Txt: "2021 몰스킨",
    main02Txt: "얼리버드 10% 할인 ",
    sub01Txt: "단순하지만 완벽한 노트북",
    sub02Txt: "몰스킨을 만나보세요"
  },
  {
    src: "images/MainBanner_grey.png",
    main01Txt: "404의 작은변화",
    main02Txt: "404 CLIP",
    sub01Txt: "클립으로 노트나 주머니에 끼워",
    sub02Txt: "보관하기 편한 404 클립"
  },

  {
    src: "images/MainBanner_pink.png",
    main01Txt: "마법처럼 사랑을 전하는",
    main02Txt: "유성매직 x LOVE PLANET",
    sub01Txt: "열 두가지 행성 아이콘이 새겨진",
    sub02Txt: "새로운 패키지 제품"
  },
  {
    src: "images/MainBanner_rainbow.png",
    main01Txt: "컬러 리얼 브러쉬",
    main02Txt: "6색 세트",
    sub01Txt: "펜으로 그리는 감성 수채화",
    sub02Txt: ""
  }
];

class MainBanner extends Component {
  constructor() {
    super();
    this.state = { currentSlideIndex: 0 };
  }

  appendDots = () => {
    const dotActive = [
      "1. 2021 몰스킨",
      "2. 404 CLIP",
      "3. 유성매직 x LOVE PLANET",
      "4. 컬러 리얼 브러쉬"
    ];

    return (
      <div>
        <ul>
          {dotActive.map((el, idx) => {
            if (idx === this.state.currentSlideIndex) {
              return <li className="txtDots">{el}</li>;
            } else {
              return <li>{idx + 1}</li>;
            }
          })}
        </ul>
      </div>
    );
  };

  render() {
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
          appendDots={this.appendDots}
          beforeChange={(prev, next) => {
            this.setState({ currentSlideIndex: next });
          }}
        >
          {Slides.map(slide => (
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
          ))}
        </Slider>
      </div>
    );
  }
}

export default MainBanner;
