import React, { Component } from "react";

class MenuDropBox extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="MenuDropBox">
        {/* {menu.categories.map((category, idx) => (
          <div>
            <h1 key={idx}>{category.title}</h1>
            <ul>
              {category.subcategories.map((subcategory, idx) => (
                <li key={idx}>{subcategory}</li>
              ))}
            </ul>
          </div>
        ))} */}
      </div>
    );
  }
}

export default MenuDropBox;
