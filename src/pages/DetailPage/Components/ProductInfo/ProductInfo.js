import React, { Component } from "react";
import "./ProductInfo.scss";
import ProductRecommendation from "../../../MainPage/components/ProductRecommendation/ProductRecommendation";

class ProductInfo extends Component {
  state = {
    chosenProduct: [
      { option: "비올라(Viola) (재고36개)", num: 1, price: "20000원" }
    ]
  };

  handleAdd = item => {
    console.log(item);
    this.setState({
      chosenProduct: {
        option: item,
        num: 1,
        price: 20000
      }
    });
  };

  render() {
    console.log("state", this.state.chosenProduct);
    const { chosenProduct } = this.state;
    const {
      name,
      bodyColor,
      inkColor,
      thickness,
      description,
      tag,
      price,
      imageUrl
    } = this.props.productInfo;

    console.log("바디컬러: ", bodyColor);
    return (
      <div className="productDetail">
        <div className="productPicture">
          <div className="bigPicture">
            <img src={imageUrl && imageUrl[0]} />
          </div>
          <div className="smallPicture">
            <div></div>
            <div className="pictureSwiper">
              <img src={imageUrl && imageUrl[0]} />
              <img src={imageUrl && imageUrl[1]} />
            </div>
          </div>
        </div>
        <div className="productInfoContainer">
          <h2>
            <a href="https://www.monamimall.com/w/product/brandProductList.do?brandIdx=824">
              Monawe/모나위
            </a>
            <strong>{name}</strong>
          </h2>
          <div className="productInfo">
            <div className="productInfoTxt">
              <div className="bodyColor">
                <span>바디컬러</span>
                <ul>
                  {bodyColor?.map(el => (
                    <li>
                      <div
                        style={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: el.hex
                        }}
                      ></div>
                      <span>{el.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="inkColor">
                <span>잉크컬러</span>
                <ul>
                  {inkColor?.map(el => (
                    <li>
                      <div
                        style={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: el.hex
                        }}
                      ></div>
                      <span>{el.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="thickness">
                <span>심두께및스펙</span>
                <ul>
                  {thickness?.map(el => (
                    <li>
                      <div
                        style={{
                          width: "30px",
                          height: el * 5 + "px"
                        }}
                      ></div>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature">
                <span>특징</span>
                <span>{description}</span>
              </div>
              <div className="mainFeature">
                <span>주요특징</span>
                {tag?.map(el => (
                  <span>{el}</span>
                ))}
              </div>
            </div>
            <div className="productInfoPrice">
              <div className="price">
                <span>판매가</span>
                <span>{price?.split(".")[0]}</span>
                <span>원</span>
              </div>
              <div className="memberBenefits">
                <span>회원혜택</span>
                <span>회원등급별 포인트 적립 및 즉시할인</span>
              </div>
              <div className="cardBenefit">
                <span>카드혜택</span>
                <span>카드 무이자 할부 혜택</span>
              </div>
            </div>
            <div className="productInfoInfo">
              <div className="maker">
                <span>원산지/판매원</span>
                <span>대한민국 / (주)모나미</span>
              </div>
              <div className="deliveryInfo">
                <span>배송정보</span>
                <span>
                  16시 30분 이전 주문시 당일출고(공휴일,토/일요일제외)
                </span>
              </div>
              <div className="deliveryPrice">
                <span>배송비</span>
                <span>2,500원 (2만원 이상 주문 시 무료 배송)</span>
              </div>
            </div>
            <div className="productPayment">
              <div className="option">
                <div> 컬러 </div>
                <div className="dropDown">
                  <button className="dropDownBtn"> 선택해주세요</button>
                  <div className="dropDownContents"></div>
                </div>
              </div>
              <div chosenProductContainer>
                {chosenProduct?.map(el => (
                  <div className="chosenProduct">
                    <div>{el.option}</div>
                    <div>{el.num}</div>
                    <div>{el.price}</div>
                  </div>
                ))}
              </div>
              <div className="totalPrice">
                <strong>총 상품금액</strong>
                <span>0 </span>
                <span>원</span>
              </div>
            </div>
            <div className="buttonArea">
              <button className="addToCart">장바구니담기</button>
              <button className="buyNow">바로구매하기</button>
              <button className="dibs">찜</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
