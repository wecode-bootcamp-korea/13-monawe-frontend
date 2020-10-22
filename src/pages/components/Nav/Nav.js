import React, { Component } from "react";
import Stationery from "./MenuDropBox/Stationery";
import MonawePet from "./MenuDropBox/MonawePet";
import CraftHobby from "./MenuDropBox/Craft&Hobby";
import Monarte from "./MenuDropBox/Monarte";
import StoryPick from "./MenuDropBox/StoryPick";
import Event from "./MenuDropBox/Event";
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
    fetch("/data/nav.json")
      .then(nav => nav.json())
      .then(({ menus }) => this.setState({ menus }));
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
              <i className="fas fa-bars" />
              <span>
                monawe<span>mall</span>
              </span>
            </div>
            <ul>
              {menus.map((menu, idx) => (
                <div
                  key={idx}
                  className={
                    hoveredIdx === idx ? "menu active" : "menu inactive"
                  }
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
              <i className="fas fa-plus-circle" />
            </div>
            <div className="icons">
              <i className="fas fa-shopping-bag" />
              <i className="fas fa-user" />
              <i className="fas fa-search" />
            </div>
          </div>
        </div>
        <Stationery />
        <MonawePet />
        <CraftHobby />
        <Monarte />
        <StoryPick />
        <Event />
      </div>
    );
  }
}

export default Nav;
