import React, { Component } from "react";
import Product from "./Product";
import "./ProductList.scss";

class ProductList extends Component {
  state = { ProductList: [] };

  componentDidMount() {
    fetch("data/list.json", {})
      .then(res => res.json())
      .then(res => {
        this.setState({
          ProductList: res.data
        });
      });
  }

  render() {
    const { ProductList } = this.state;
    console.log(ProductList);
    return (
      <div className="ProductList">
        <div className="categorySort">
          <div className="innerSort">
            <h3>153프리미엄</h3>
            <span>
              등록상품:
              <b>23</b>개
            </span>
            <div className="sortArea">
              <select>
                <option>40개씩</option>
                <option>80개씩</option>
                <option>100개씩</option>
              </select>
              <select>
                <option> 신상품순 </option>
                <option> 가격 높은순 </option>
                <option> 낮은 가격순</option>
              </select>
            </div>
          </div>
        </div>
        <div className="Products">
          <ul className="Product">
            {ProductList &&
              ProductList.map(el => (
                <Product
                  imageUrl={el.imageUrl}
                  subcategoryName={el.subcategoryName}
                  name={el.name}
                  price={el.price}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
