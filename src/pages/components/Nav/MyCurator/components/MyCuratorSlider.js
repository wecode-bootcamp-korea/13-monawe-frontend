import React, { Component } from "react";
import Slider from "react-slick";
import "../../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./MyCuratorSlider.scss";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="far fa-caret-square-left slick-arrow"
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="far fa-caret-square-right slick-arrow"
      onClick={onClick}
    />
  );
}

class MyCuratorSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    return (
      <div className="MyCuratorSlider">
        <Slider {...settings}>
          <div>
            <img src="http://placehold.it/160X160" alt="item" />
            <div>
              <span>
                모나미 x 하비풀 리제의 모나미 데코마카 캘리그라피 클래스
              </span>
              <small>20,000원</small>
            </div>
          </div>
          <div>
            <img src="http://placehold.it/160X160" alt="item" />
            <div>
              <span>153 블라썸</span>
              <small>20,000원</small>
            </div>
          </div>
          <div>
            <img src="http://placehold.it/160X160" alt="item" />
            <div>
              <span>153 블라썸</span>
              <small>20,000원</small>
            </div>
          </div>
          <div>
            <img src="http://placehold.it/160X160" alt="item" />
            <div>
              <span>153 블라썸</span>
              <small>20,000원</small>
            </div>
          </div>
          <div>
            <img src="http://placehold.it/160X160" alt="item" />
            <div>
              <span>153 블라썸</span>
              <small>20,000원</small>
            </div>
          </div>
          <div>
            <img src="http://placehold.it/160X160" alt="item" />
            <div>
              <span>153 블라썸</span>
              <small>20,000원</small>
            </div>
          </div>
          <div>
            <img src="http://placehold.it/160X160" alt="item" />
            <div>
              <span>153 블라썸</span>
              <small>20,000원</small>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default MyCuratorSlider;
