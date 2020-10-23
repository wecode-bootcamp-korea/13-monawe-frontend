import React, { Component } from "react";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    const { imageUrl } = this.props.productInfo;

    return (
      <div className="productDetailContainer">
        <div className="productDetailPicture">
          <img src={imageUrl} />
        </div>
        <div className="productDetailDescription">
          <img src="./images/상품설명img.png" />
          {/* <ul>
            <span>제품명</span>
            <span>153Blossom</span>
            <span>제품 구성</span>
            <li>153Blossom 볼펜</li>
            <span>사이즈</span>
            <li> 케이스 183mmX51mmX20mm</li>
            <span>제조국명</span>
            <li>한국</li>
            <span>판매자명</span>
            <li>(주)모나미</li>
          </ul>
          <div className="desBottom">
            <span>사용상 주의사항</span>
            <ul>
              <li>용도 외에는 사용하지 마십시오</li>
              <li>입에 대지 마십시오.</li>
              <li>어린아이의 제품 사용시 보호자의 관심이 필요합니다.</li>
              <li>직사광선, 화기 및 고온에 가까이 두지 마십시오.</li>
              <li>
                잉크 성분의 특성상 장기간 보관시 사용이 어려울 수 있습니다.
              </li>
              <li>
                제품이 충격이 가해지면 파손 또는 잉크가 유출될 수 있습니다.
              </li>
              <li>심을 돌출하여 보관하면 잉크가 유출될 수 있습니다.</li>
              <li>
                의류 및 가방 휴대시, 버튼이 눌려 제품에 오염을 일으킬 수
                있습니다.
              </li>
            </ul> */}
        </div>
      </div>
    );
  }
}

export default ProductDetail;
