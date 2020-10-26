import React, { Component } from "react";
import "./ContentType.scss";

class ContentType extends Component {
  handleDropBox = e => {
    console.log(e);
  };

  render() {
    const { categories, className, onDropBox } = this.props;

    return (
      <div className={className} onMouseLeave={onDropBox}>
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
