import React, { Component } from "react";
import { Link } from "react-router-dom";
import MENUS from "./navdata";
import "./ProductListNav.scss";

class ProductListNav extends Component {
  constructor() {
    super();
    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    this.setState({ menus: MENUS[0] });
  }

  render() {
    const { menus } = this.state;
    const categories = menus.categories;

    return (
      <div className="StationeryList">
        <div className="inner">
          <div className="categoryArea">
            <ul>
              <li className="active">
                <Link to="/" className="StationeryTitle">
                  Stationery
                </Link>
              </li>
            </ul>
            <ul className="categoryBox">
              {menus &&
                categories?.map(category => (
                  <li>
                    <Link to="/" className="depth2Title">
                      {category.title}
                    </Link>
                    <ul>
                      {categories &&
                        category.subcategories?.map(sub => (
                          <li>
                            <Link className="depth3" to="/">
                              {sub}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListNav;
