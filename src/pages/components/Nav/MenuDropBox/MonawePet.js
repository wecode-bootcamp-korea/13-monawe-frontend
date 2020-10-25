import React, { Component } from "react";
import MENUS from "../Navdata";
import "./MonawePet.scss";

class MonawePet extends Component {
  constructor() {
    super();
    this.state = {
      dogCategories: [],
      catCategories: []
    };
  }

  componentDidMount() {
    fetch("data/nav.json");
    this.setState({
      dogCategories: MENUS[1].dog.categories,
      catCategories: MENUS[1].cat.categories
    });
  }

  render() {
    const { dogCategories, catCategories } = this.state;

    return (
      <div className={this.props.class}>
        <div>
          <h3>DOG</h3>
          <div className="categories">
            {dogCategories.map((category, idx) => (
              <ul key={idx}>
                <h5>{category.title}</h5>
                {category.subcategories.map((subcategory, idx) => (
                  <li key={idx}>{subcategory}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div>
          <h3>CAT</h3>
          <div className="categories">
            {catCategories.map((category, idx) => (
              <ul key={idx}>
                <h5>{category.title}</h5>
                {category.subcategories.map((subcategory, idx) => (
                  <li key={idx}>{subcategory}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MonawePet;
