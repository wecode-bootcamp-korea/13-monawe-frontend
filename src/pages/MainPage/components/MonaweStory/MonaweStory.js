import React, { Component } from "react";
import Slider from "react-slick";
import STORIES from "./MonaweStoryData";
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
      infinite: false,
      autoplay: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    const { stories } = this.state;

    return (
      <div className="MonaweStory">
        <h1>Story pick: 모나위 문구 이야기</h1>
        <div>
          <Slider {...settings}>
            {stories.map((story, idx) => (
              <div key={idx}>
                <div
                  className="storyMainImage"
                  style={{
                    backgroundImage: `url(${story.mainImage})`,
                    width: 300,
                    height: 450
                  }}
                ></div>
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
