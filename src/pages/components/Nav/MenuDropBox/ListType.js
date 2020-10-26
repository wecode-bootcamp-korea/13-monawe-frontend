import React, { Component } from "react";
import "./ListType.scss";

class ListType extends Component {
  render() {
    const { subcategories, className, onDropBox } = this.props;

    return (
      <div className={className} onMouseLeave={onDropBox}>
        <div>
          {subcategories?.map((subcategory, idx) => (
            <li key={idx}>{subcategory}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default ListType;
