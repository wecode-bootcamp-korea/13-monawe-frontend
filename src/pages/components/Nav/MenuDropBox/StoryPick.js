import React, { Component } from "react";
import "./StoryPick.scss";

class StoryPick extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/nav.json", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({
          categories: res.menus[4]?.categories
        });
      });
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="StoryPick">
        <div>
          {categories &&
            categories.map((category, idx) => (
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
    );
  }
}

export default StoryPick;
