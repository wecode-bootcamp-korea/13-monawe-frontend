import React, { Component } from "react";
import MENUS from "./navdata";
import "./ProductListNav.scss";

class ProductListNav extends Component {
  constructor() {
    super();
    this.state = {
      menus: {
        koreanName: "문구",
        englishName: "Stationery",
        categories: []
      }
    };
  }

  componentDidMount() {
    this.setState({ menus: MENUS[0] });
  }

  render() {
    const {
      menus: { categories }
    } = this.state;
    console.log(categories, "v");

    const { subcategoryPage } = this.props;

    return (
      <div className="StationeryList">
        <div className="inner">
          <div className="categoryArea">
            <ul>
              <li className="StationeryTitle">Stationery</li>
            </ul>
            <ul className="categoryBox">
              {categories.map(category => (
                <li>
                  <span
                    onClick={e =>
                      subcategoryPage(e, "category", category.title.id)
                    }
                  >
                    {category.title.name}
                  </span>
                  <ul>
                    {category.subcategories.map((sub, idx) => (
                      <li
                        className="depth3"
                        onClick={e => subcategoryPage(e, "subcategory", sub.id)}
                      >
                        {sub.name}
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
