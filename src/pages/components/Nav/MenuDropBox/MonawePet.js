import React, { Component } from "react";
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
    fetch("http://localhost:3000/data/nav.json", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({
          dogCategories: res.menus[1].dog?.categories,
          catCategories: res.menus[1].cat?.categories
        });
      });
  }

  render() {
    const { dogCategories, catCategories } = this.state;

    return (
      <div className="MonawePet">
        <div>
          <h3>DOG</h3>
          <div className="categories">
            {dogCategories &&
              dogCategories.map((category, idx) => (
                <ul key={idx}>
                  <h5>{category.title}</h5>
                  {category &&
                    category.subcategories.map((subcategory, idx) => (
                      <li key={idx}>{subcategory}</li>
                    ))}
                </ul>
              ))}
          </div>
        </div>
        <div>
          <h3>CAT</h3>
          <div className="categories">
            {catCategories &&
              catCategories.map((category, idx) => (
                <ul key={idx}>
                  <h5>{category.title}</h5>
                  {category &&
                    category.subcategories.map((subcategory, idx) => (
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
