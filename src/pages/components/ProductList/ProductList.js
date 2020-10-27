import React, { Component } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import "./ProductList.scss";

class ProductList extends Component {
  state = {
    ProductList: [],
    orderBy: "-created_at",
    pageNumber: 1,
    itemPerPage: 20,
    numPages: 0
  };

  componentDidMount() {
    const { orderBy, pageNumber, itemPerPage } = this.state;
    fetch(
      //"http://localhost:3000/data/ProductListPage.json"
      `http://10.58.1.8:8000/product/list?category=1&order_by=${orderBy}&page_number=${pageNumber}&item_per_page=${itemPerPage}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res.numPages);
        this.setState({
          ProductList: res.data,
          numPages: res.numPages
        });
      });
  }
  changeNum = e => {
    const itemPerPage = e.target.value;
    const { orderBy, pageNumber } = this.state;
    fetch(
      `http://10.58.1.8:8000/product/list?category=1&order_by=${orderBy}&page_number=${pageNumber}&item_per_page=${itemPerPage}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          ProductList: res.data
        });
      });
  };

  changeState = e => {
    const { orderBy, pageNumber, itemPerPage } = this.state;
    const id = e.target.value;
    fetch(
      `http://10.58.1.8:8000/product/list?category=1&order_by=${id}&page_number=${pageNumber}&item_per_page=${itemPerPage}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          ProductList: res.data
        });
      });
  };

  changePageNumber = e => {
    const id = e.target.value;
    const { pageNumber, orderBy, itemPerPage } = this.state;
    console.log(value);
    fetch(
      `http://10.58.1.8:8000/product/category/1?order_by=${orderBy}&page_number=${id}&item_per_page=${itemPerPage}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          ProductList: res.data
        });
      });

  goToDetail = () => {
    console.log("v");
    };
  };

  render() {
    const { numPages, ProductList } = this.state;
    const { orderBy, pageNumber, itemPerPage } = this.state;
    // console.log(Array(5));
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
              <select value={this.state.value} onChange={this.changeNum}>
                <option value="20">20개씩</option>
                <option value="40">40개씩</option>
                <option value="80">80개씩</option>
              </select>
              <select value={this.state.value} onChange={this.changeState}>
                <option value="-created_at" onClick={this.changeState}>
                  신상품순
                </option>
                <option value="-price" onClick={this.changeState}>
                  가격 높은순
                </option>
                <option value="price" onClick={this.changeState}>
                  낮은 가격순
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="Products">
          <ul className="Product">
            {ProductList &&
              ProductList?.map(el => (
                <Link to={`/detail/${el.id}`}>
                  <Product
                    imageUrl={el.imageUrl}
                    subcategoryName={el.subcategoryName}
                    name={el.name}
                    price={el.price}
                  />
                </Link>
              ))}
          </ul>
        </div>
        <div class="Paging">
          <ul className="innerPaging">
            {[...Array(numPages)].map((el, index) => (
              <li onClick= {this.changePageNumber}>{index + 1}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
