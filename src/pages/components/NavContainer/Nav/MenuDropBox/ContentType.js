import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { API_KM } from "../../../../../Config";
import "./ContentType.scss";

class ContentType extends Component {
  handlePageChange = id => {
    const SUBCATEGORIES = {
      1: 1,
      2: 4,
      3: 8,
      4: 11,
      5: 14
    };

    this.props.history.push(
      `/products?category=${id}&subcategory=${SUBCATEGORIES[id]}&order_by=created_at&page_number=1&item_per_page=20`
    );
  };

  render() {
    const { categories, className, onDropBox } = this.props;

    return (
      <div className={className} onMouseLeave={onDropBox}>
        <div>
          {categories?.map((category, idx) => (
            <ul key={idx}>
              <h5 onClick={() => this.handlePageChange(idx + 1)}>
                {category.title}
              </h5>
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

export default withRouter(ContentType);
