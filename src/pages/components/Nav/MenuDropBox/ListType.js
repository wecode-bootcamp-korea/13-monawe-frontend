import React, { Component } from "react";
import "./ListType.scss";

class ListType extends Component {
  render() {
    const { subcategories } = this.props;

    return (
      <div className={this.props.class}>
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
