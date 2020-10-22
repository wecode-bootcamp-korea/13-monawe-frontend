import React, { Component } from "react";
import "./Craft&Hobby.scss";

class CraftHobby extends Component {
  constructor() {
    super();
    this.state = {
      subcategories: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/nav.json", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({
          subcategories: res.menus[2]?.subcategories
        });
      });
  }

  render() {
    const { subcategories } = this.state;

    return (
      <div className="CraftHobby">
        <div>
          {subcategories.map((subcategory, idx) => (
            <li key={idx}>{subcategory}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default CraftHobby;
