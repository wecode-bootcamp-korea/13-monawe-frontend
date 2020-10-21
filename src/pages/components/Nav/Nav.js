import React, { Component } from "react";
import MenuDropBox from "./MenuDropBox/MenuDropBox";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      menus: [],
      hoveredIdx: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/nav.json", { method: "GET" })
      .then(nav => nav.json())
      .then(nav => {
        this.setState({
          menus: nav.menus
        });
      });
  }

  //MouseOver style 변화
  handleMenuStyle = idx => {
    this.setState({ menus: this.state.menus, hoveredIdx: idx });
  };

  render() {
    const { menus, hoveredIdx } = this.state;
    return (
      <div>
        <div className="Nav">
          <div className="menuTab">
            <div>
              <i className="fas fa-bars"></i>
              <span>
                monawe<span>mall</span>
              </span>
            </div>
            <ul>
              {menus.map((menu, idx) => (
                <div
                  key={idx}
                  className={hoveredIdx === idx ? "activeMenu" : "inactiveMenu"}
                >
                  <small>{menu.koreanName}</small>
                  <span onMouseOver={() => this.handleMenuStyle(idx)}>
                    {menu.englishName}
                  </span>
                </div>
              ))}
            </ul>
          </div>
          <div className="userInfo">
            <div className="userName">
              <span>
                모나위<span>님&nbsp;&nbsp;</span>
              </span>
              <i className="fas fa-plus-circle"></i>
            </div>
            <div className="icons">
              <i className="fas fa-shopping-bag"></i>
              <i className="fas fa-user"></i>
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
        <MenuDropBox
          hoveredIdx={hoveredIdx}
          categories={menus[hoveredIdx]?.categories}
        />
      </div>
    );
  }
}

export default Nav;
