import React, { Component } from "react";
import Slider from "react-slick";
import "../../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./MyCuratorSlider.scss";

function PrevArrow(props) {
  const { onClick } = this.props;
  return (
    <button
      className="far fa-caret-square-left slick-arrow"
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { onClick } = this.props;
  return (
    <button
      className="far fa-caret-square-right slick-arrow"
      onClick={onClick}
    />
  );
}

class MyCuratorSlider extends Component {
  getNumberTransferToPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    const { recentelyViewedProducts } = this.props;
    return (
      <div className="MyCuratorSlider">
        <Slider {...settings}>
          {recentelyViewedProducts?.map((product, idx) => (
            <div key={idx}>
              <img src={product.product_image} alt={product.product_name} />
              <div>
                <span>{product.product_name}</span>
                <small>
                  {this.getNumberTransferToPrice(
                    Number(product.product_price)
                  ) + "원"}
                </small>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default MyCuratorSlider;
