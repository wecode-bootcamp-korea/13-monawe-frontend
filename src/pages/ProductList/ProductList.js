import React, { Component } from "react";
import Product from "./component/Product/Product";
import ProductListNav from "../ProductList/component/ProductListNav/ProductListNav";
import { API_KM } from "../../Config";
import "./ProductList.scss";

class ProductList extends Component {
  state = {
    ProductList: [],
    orderBy: "created_at",
    pageNumber: 1,
    itemPerPage: 20,
    numPages: 0,
    numProducts: 0,
    subcategory: 0
  };

  componentDidMount() {
    // const query = window.location.search.substring(1);
    // const vars = query.split("&");
    // const queryValue = [];
    // for (var i = 0; i < vars.length; i++) {
    //   var pair = vars[i].split("=");
    //   queryValue.push(pair[1]);
    // }

    fetch(
      `${API_KM}/products?category=1&subcategory=1&order_by=created_at&page_number=1&item_per_page=20`
      // `${API_KM}/products?category=${queryValue[0]}&subcategory=${queryValue[1]}&order_by=${queryValue[2]}&page_number=${queryValue[3]}&item_per_page=${queryValue[4]}`
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

  changeUrlState = (event, name, string) => {
    const value = string ? string : event.target.value;

    let query = window.location.search.substring(1);
    let vars = query.split("&");
    let queryValue = [];
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      queryValue.push(pair[1]);
    }

    const categoryName = name === "category" ? value : +queryValue[0];
    const subcategoryName = name === "subcategory" ? value : +queryValue[1];
    const OrderBytype = name === "sortBtn" ? value : queryValue[2];
    const pagingNumber = name === "pagingbtn" ? value : +queryValue[3];
    const itemPerPageNum = name === "itemPerPageBtn" ? value : +queryValue[4];

    fetch(
      `${API_KM}/products?category=${categoryName}&subcategory=${subcategoryName}&order_by=${OrderBytype}&page_number=${pagingNumber}&item_per_page=${itemPerPageNum}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.props.history.push(
          `/products?category=${categoryName}&subcategory=${subcategoryName}&order_by=${OrderBytype}&page_number=${pagingNumber}&item_per_page=${itemPerPageNum}`
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
        <ProductListNav subcategoryPage={this.changeUrlState} />
        <div className="ProductListPage">
          <div className="productContainer">
            <div className="categorySort">
              <div className="innerSort">
                <h3>{ProductList[0]?.subcategory_name}</h3>
                <span>
                  등록상품:
                  <b>{numProducts}</b>개
                </span>
                <div className="sortArea">
                  <select
                    onChange={e =>
                      this.changeUrlState(e, "itemPerPageBtn", this.state.value)
                    }
                  >
                    <option value="20">20개씩</option>
                    <option value="40">40개씩</option>
                    <option value="80">80개씩</option>
                  </select>
                  <select
                    onChange={e =>
                      this.changeUrlState(e, "sortBtn", this.state.value)
                    }
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
                      key={el.id}
                      id={el.id}
                      imageUrl={el.image_url}
                      subcategoryName={el.subcategory_name}
                      name={el.name}
                      price={el.price}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div class="Paging">
          <ul className="innerPaging">
            {[...Array(numPages)].map((el, index) => (
              <li onClick={e => this.changeUrlState(e, "pagingbtn", index + 1)}>
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
