import React, { Component } from "react";
import "./DetailPage.scss";

class DetailPage extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="location">
          <ul>
            <li>Home</li>
            <li>Stationary</li>
          </ul>
        </div>
        <div className="productDetail">
          <div className="productPicture">
            <div className="bigPicture">
              <img
                src={
                  "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/goods/MG000003497/main/MG000003497_REP_THUMB_540X540_20191206103812.blob"
                }
              />
            </div>
            <div className="smallPicture">
              <div className="pictureSwiper">
                <img
                  src={
                    "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/goods/MG000003497/main/MG000003497_REP_THUMB_540X540_20191206103812.blob"
                  }
                />
                <img
                  src={
                    "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/goods/MG000003497/main/MG000003497_DET_THUMB_1_540X540_20191206103814.blob"
                  }
                />
              </div>
            </div>
          </div>
          <div className="productInfoContainer">
            <h2>
              <a href="https://www.monamimall.com/w/product/brandProductList.do?brandIdx=824">
                Monawe/모나위
              </a>
              <strong>153블라썸</strong>
            </h2>
            {/* <ul className="share">
            <li>
              <a></a>
            </li>
            <li>
              <a></a>
            </li>
            <li>
              <a></a>
            </li>
          </ul> */}
            <div className="productInfo">
              <div className="productInfoTxt">
                <div className="bodyColor">
                  <span>바디컬러</span>
                  <ul>
                    <li>
                      <img
                        src={
                          "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/attribute/23_58340_P_120x80.blob"
                        }
                      />
                      <span>비올라</span>
                    </li>
                    <li>
                      <img
                        src={
                          "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/attribute/23_58322_P_120x80.blob"
                        }
                      />
                      <span>피오니</span>
                    </li>
                  </ul>
                </div>
                <div className="inkColor">
                  <span>잉크컬러</span>
                  <ul>
                    <li>
                      <img
                        src={
                          "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/attribute/303_58462_P_120x80.blob"
                        }
                      />
                      <span>블랙</span>
                    </li>
                  </ul>
                </div>
                <div className="thickness">
                  <span>심두께및스펙</span>
                  <ul>
                    <li>
                      <img
                        src={
                          "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/attribute/24_58562_P_120x80.blob"
                        }
                      />
                      <span>0.7mm</span>
                    </li>
                  </ul>
                </div>
                <div className="feature">
                  <span>특징</span>
                  <span>무광 메탈 소재, 고급리필심(FX-4000) 장착</span>
                </div>
                <div className="mainFeature">
                  <span>주요특징</span>
                  <span>프리미엄펜</span>
                  <span>153시리즈</span>
                  <span>각인서비스</span>
                  <span>부드러운필기감</span>
                </div>
              </div>
              <div className="productInfoPrice">
                <div className="price">
                  <span>판매가</span>
                  <span>20,000</span>
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
                  <ul>
                    <li>
                      <span> 컬러 </span>
                      <div className="dropDown">
                        <span> 선택해주세요 </span>
                      </div>
                    </li>
                  </ul>
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
        <div className="productCategories">
          <ul>
            <li>
              <a href>상품상세정보</a>
            </li>
            <li>
              <a href>상품리뷰(22)</a>
            </li>
            <li>
              <a href>스토리픽</a>
            </li>
            <li>
              <a>반품교환안내</a>
            </li>
          </ul>
        </div>
        <div className="reviewContainer">
          <div className="reviewSummary">
            <div class="starReview">
              <span>상품리뷰</span>
              <div className="grade">
                <div class="gradeTxt">
                  <em>4.5</em> <span>/</span>
                  <em>5점중</em>
                </div>
                <div class="gradeStarBig">
                  <span>⭐️⭐️⭐️⭐️⭐️</span>
                </div>
              </div>
            </div>
            <div className="photoReview">
              <h4>
                포토리뷰 (<em> 10 </em>)
              </h4>
              <div className="photoReviewSlider">
                <img
                  src={
                    "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/review/2019033023362602123.jpeg"
                  }
                />
                <img
                  src={
                    "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/review/2020073117244913405.jpg"
                  }
                />
                <img
                  src={
                    "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/review/2020063021550623137.jpeg"
                  }
                />
                <img
                  src={
                    "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/review/2020040313540996041.jpg"
                  }
                />
                <img
                  src={
                    "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/review/2019121113401173107.jpeg"
                  }
                />
                <img
                  src={
                    "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/review/2019113012211727053.jpg"
                  }
                />
                <img
                  src={
                    "https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/product/review/2019061009505404452.jpg"
                  }
                />
              </div>
            </div>
          </div>
          <div className="reviewList">
            <div className="listTop">
              <div className="allReview">전체 리뷰 (22)</div>
              <div className="btnArea">
                <span>선택해주세요</span>
                <button className="1:1문의">1:1문의</button>
                <button className="상품리뷰작성">상품리뷰작성</button>
              </div>
            </div>
            <div className="listItems">
              <div className="item">
                <strong class="itemTitle">
                  원래 쓰고있던 오프라인에서 구매한 게
                </strong>
                <span class="itemTxt">
                  원래 쓰고있던 오프라인에서 구매한 게 있는데 직장에서 쓰니
                  필기감 너무좋아서 집에서 쓸 목적으로 샀어요! 평생쓸것같습니다~
                  각인하면 더 오래걸린다고 했는데 며칠 ...
                </span>
                <div className="itemPayInfo">
                  <span>Npay</span>
                  <span>2020.10.21</span>
                </div>
                <div className="smallStarGrade">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <div className="item">
                <strong class="itemTitle">
                  원래 쓰고있던 오프라인에서 구매한 게
                </strong>
                <span class="itemTxt">
                  원래 쓰고있던 오프라인에서 구매한 게 있는데 직장에서 쓰니
                  필기감 너무좋아서 집에서 쓸 목적으로 샀어요! 평생쓸것같습니다~
                  각인하면 더 오래걸린다고 했는데 며칠 ...
                </span>
                <div className="itemPayInfo">
                  <span>Npay</span>
                  <span>2020.10.21</span>
                </div>
                <div className="smallStarGrade">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <div className="item">
                <strong class="itemTitle">
                  원래 쓰고있던 오프라인에서 구매한 게
                </strong>
                <span class="itemTxt">
                  원래 쓰고있던 오프라인에서 구매한 게 있는데 직장에서 쓰니
                  필기감 너무좋아서 집에서 쓸 목적으로 샀어요! 평생쓸것같습니다~
                  각인하면 더 오래걸린다고 했는데 며칠 ...
                </span>
                <div className="itemPayInfo">
                  <span>Npay</span>
                  <span>2020.10.21</span>
                </div>
                <div className="smallStarGrade">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <div className="item">
                <strong class="itemTitle">
                  원래 쓰고있던 오프라인에서 구매한 게
                </strong>
                <span class="itemTxt">
                  원래 쓰고있던 오프라인에서 구매한 게 있는데 직장에서 쓰니
                  필기감 너무좋아서 집에서 쓸 목적으로 샀어요! 평생쓸것같습니다~
                  각인하면 더 오래걸린다고 했는데 며칠 ...
                </span>
                <div className="itemPayInfo">
                  <span>Npay</span>
                  <span>2020.10.21</span>
                </div>
                <div className="smallStarGrade">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <div className="item">
                <strong class="itemTitle">
                  원래 쓰고있던 오프라인에서 구매한 게
                </strong>
                <span class="itemTxt">
                  원래 쓰고있던 오프라인에서 구매한 게 있는데 직장에서 쓰니
                  필기감 너무좋아서 집에서 쓸 목적으로 샀어요! 평생쓸것같습니다~
                  각인하면 더 오래걸린다고 했는데 며칠 ...
                </span>
                <div className="itemPayInfo">
                  <span>Npay</span>
                  <span>2020.10.21</span>
                </div>
                <div className="smallStarGrade">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <div className="item">
                <strong class="itemTitle">
                  원래 쓰고있던 오프라인에서 구매한 게
                </strong>
                <span class="itemTxt">
                  원래 쓰고있던 오프라인에서 구매한 게 있는데 직장에서 쓰니
                  필기감 너무좋아서 집에서 쓸 목적으로 샀어요! 평생쓸것같습니다~
                  각인하면 더 오래걸린다고 했는데 며칠 ...
                </span>
                <div className="itemPayInfo">
                  <span>Npay</span>
                  <span>2020.10.21</span>
                </div>
                <div className="smallStarGrade">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <div className="item">
                <strong class="itemTitle">
                  원래 쓰고있던 오프라인에서 구매한 게
                </strong>
                <span class="itemTxt">
                  원래 쓰고있던 오프라인에서 구매한 게 있는데 직장에서 쓰니
                  필기감 너무좋아서 집에서 쓸 목적으로 샀어요! 평생쓸것같습니다~
                  각인하면 더 오래걸린다고 했는데 며칠 ...
                </span>
                <div className="itemPayInfo">
                  <span>Npay</span>
                  <span>2020.10.21</span>
                </div>
                <div className="smallStarGrade">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <div className="item">
                <strong class="itemTitle">
                  원래 쓰고있던 오프라인에서 구매한 게
                </strong>
                <span class="itemTxt">
                  원래 쓰고있던 오프라인에서 구매한 게 있는데 직장에서 쓰니
                  필기감 너무좋아서 집에서 쓸 목적으로 샀어요! 평생쓸것같습니다~
                  각인하면 더 오래걸린다고 했는데 며칠 ...
                </span>
                <div className="itemPayInfo">
                  <span>Npay</span>
                  <span>2020.10.21</span>
                </div>
                <div className="smallStarGrade">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div className="listPaging">
              <div></div>
              <div></div>
              <div>
                <span>1</span>
              </div>
              <div>2</div>
              <div>3</div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
