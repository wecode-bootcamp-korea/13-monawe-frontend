import React, { Component } from "react";
import Slider from "react-slick";
import STORIES from "./MonaweStoryData";
import "../../../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./MonaweStory.scss";

class MonaweStory extends Component {
  constructor() {
    super();
    this.state = {
      stories: []
    };
  }
  componentDidMount() {
    this.setState({ stories: STORIES });
  }

  render() {
    const settings = {
      autoplay: true,
      speed: 500,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
      // centerMode: true,
      // centerPadding: "60px",
      // responsive: [
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: "40px",
      //       slidesToShow: 3
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: "40px",
      //       slidesToShow: 1
      //     }
      //   }
      // ],
    };

    const { stories } = this.state;

    return (
      <div className="MonaweStory">
        <h1>Story pick: 모나위 문구 이야기</h1>
        <div>
          <Slider {...settings}>
            {stories.map((story, idx) => (
              <div key={idx}>
                <img src={story.mainImage} alt="" />
                <div className="storyInfo">
                  <span>{story.tag}</span>
                  <h2>{story.title}</h2>
                  <p>{story.description}</p>
                </div>
                <div className="storyProduct">
                  <img src={story.productInfo?.productImage} alt="" />
                  <div>
                    <span className="brandName">
                      {story.productInfo?.productBrand}
                    </span>
                    <span className="productName">
                      {story.productInfo?.productName}
                    </span>
                    <span className="productPrice">
                      {story.productInfo?.productPrice + "원"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default MonaweStory;
