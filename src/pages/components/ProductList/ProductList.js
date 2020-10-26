import React, { Component } from "react";
import Product from "./Product";
import "./ProductList.scss";

class ProductList extends Component {
  state = {
    ProductList: [],
    orderBy: "-created_at",
    pageNumber: 1,
    itemPerPag: 20
  };

  componentDidMount() {
    const { orderBy, pageNumber, itemPerPag } = this.state;

    fetch(
      // "http://localhost:3000/data/list.json"
      `http://10.58.1.8:8000/product/list?category=1&order_by=${orderBy}&page_number=${pageNumber}&item_per_page=${itemPerPag}`
    )
      .then(res => {
        console.log("첫번째 res: ", res);
        return res.json();
      })
      .then(res => {
        console.log("response: ", res);
        this.setState({
          ProductList: res.data
        });
      })
      .catch(err => {
        console.log("에러", err);
      });
    // console.log(this.state);
  }

  componentDidUpdate() {
    const { orderBy, pageNumber, itemPerPag } = this.state;
    fetch(
      `10.58.1.8:8000/product/list?category=1&order_by=${orderBy}&page_number=${pageNumber}&item_per_page=${itemPerPag}`,
      {}
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          ProductList: res.data
        });
      });
  }
  changeNum = event => {
    this.setState({ itemPerPag: event.target.name });
  };

  changeState = event => {
    this.setState({ itemPerPag: event.target.name });
  };

  render() {
    const { ProductList } = this.state;

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
                <option name="40" onClick={() => this.changeNum(40)}>
                  40개씩
                </option>
                <option name="80" onClick={() => this.changeNum(80)}>
                  80개씩
                </option>
                <option name="100" onClick={() => this.changeNum(100)}>
                  100개씩
                </option>
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
