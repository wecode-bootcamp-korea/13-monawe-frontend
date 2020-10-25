import React, { Component } from "react";
import MENUS from "../Navdata";
import "./ContentType.scss";

class ContentType extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className={this.props.class}>
        <div>
          {categories?.map((category, idx) => (
            <ul key={idx}>
              <h5>{category.title}</h5>
              {category.subcategories.map((subcategory, idx) => (
                <li key={idx}>{subcategory}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default ContentType;
