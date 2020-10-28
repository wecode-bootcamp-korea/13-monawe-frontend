import React, { Component } from "react";
import Product from "./Product";
import "./ProductList.scss";

class ProductList extends Component {
  state = {
    ProductList: [],
    orderBy: "created_at",
    pageNumber: 1,
    itemPerPage: 20,
    numPages: 0,
    numProducts: 0
  };

  componentDidMount() {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    const queryValue = [];
    for (var i = 1; i < vars.length; i++) {
      var pair = vars[i].split("=");
      queryValue.push(pair[1]);
    }

    fetch(
      `http://10.58.1.8:8000/products?category=1&order_by=${queryValue[0]}&page_number=${queryValue[1]}&item_per_page=${queryValue[2]}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          ProductList: res.data,
          numPages: res.num_pages,
          numProducts: res.num_products
        });
      });
  }

  changeUrlState = e => {
    const nameTwo = e?.target.dataset.name;
    const { value, name } = e.target;

    let query = window.location.search.substring(1);
    let vars = query.split("&");
    let queryValue = [];

    for (let i = 1; i < vars.length; i++) {
      let pair = vars[i].split("=");
      queryValue.push(pair[1]);
    }
    const OrderBytype = name === "sortBtn" ? value : queryValue[0];
    const pagingNumber =
      name === "pagingbtn" || nameTwo === "pagingbtn" ? value : queryValue[1];
    const itemPerPageNum = name === "itemPerPageBtn" ? value : queryValue[2];
    fetch(
      `http://10.58.1.8:8000/products?category=1&order_by=${OrderBytype}&page_number=${pagingNumber}&item_per_page=${itemPerPageNum}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.props.history.push(
          `/products?category=1&order_by=${OrderBytype}&page_number=${pagingNumber}&item_per_page=${itemPerPageNum}`
        );
        this.setState({
          ProductList: res.data,
          numPages: res.num_pages
        });
      });
  };

  render() {
    const { numPages, ProductList, numProducts } = this.state;
    return (
      <div className="ProductList">
        <div className="categorySort">
          <div className="innerSort">
            <h3>153프리미엄</h3>
            <span>
              등록상품:
              <b>{numProducts}</b>개
            </span>
            <div className="sortArea">
              <select
                name="itemPerPageBtn"
                value={this.state.value}
                onChange={this.changeUrlState}
              >
                <option value="20">20개씩</option>
                <option value="40">40개씩</option>
                <option value="80">80개씩</option>
              </select>
              <select
                name="sortBtn"
                value={this.state.value}
                onChange={this.changeUrlState}
              >
                <option value="created_at">신상품순</option>
                <option value="-price">가격 높은순</option>
                <option value="price">낮은 가격순</option>
              </select>
            </div>
          </div>
        </div>
        <div className="Products">
          <ul className="Product">
            {ProductList &&
              ProductList?.map(el => (
                <Product
                  id={el.id}
                  imageUrl={el.image_url}
                  subcategoryName={el.subcategory_name}
                  name={el.name}
                  price={el.price}
                />
              ))}
          </ul>
        </div>
        <div class="Paging">
          <ul className="innerPaging">
            {[...Array(numPages)].map((el, index) => (
              <li
                data-name="pagingbtn"
                value={index + 1}
                onClick={this.changeUrlState}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
