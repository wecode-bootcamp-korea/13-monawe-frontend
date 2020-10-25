import React, { Component } from "react";
import MENUS from "./Navdata";
import ContentType from "./MenuDropBox/ContentType";
import MonawePet from "./MenuDropBox/MonawePet";
import ListType from "./MenuDropBox/ListType";
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
    this.setState({
      menus: MENUS
    });
  }

  //MouseOver style 변화
  handleMenuStyle = idx => {
    this.setState({ menus: this.state.menus, hoveredIdx: idx });
  };

  // handleHiddenMenuStyle = idx => {
  //   this.setState({
  //     menus: this.state.menus,
  //     hoveredIdx: this.state.hoveredIdx === idx && ""
  //   });
  // };
  // mouseleave...추가 event 확인 필요

  handleMyCurator = e => {
    this.props.onMyCurator(e);
  };

  handleSearchBox = e => {
    this.props.onSearchBox(e);
  };

  render() {
    const { menus, hoveredIdx } = this.state;
    return (
      <div>
        <div className="Nav">
          <div className="menuTab">
            <div>
              <button className="fas fa-bars" />
              <span>
                monawe<span>mall</span>
              </span>
            </div>
            <ul className="menuLists">
              {menus.map((menu, idx) => (
                <div
                  key={idx}
                  className={
                    hoveredIdx === idx ? "menu active" : "menu inactive"
                  }
                  onMouseOver={() => this.handleMenuStyle(idx)}
                  // onMouseOut={() => this.handleHiddenMenuStyle(idx)}
                >
                  <small>{menu.koreanName}</small>
                  <span>{menu.englishName}</span>
                </div>
              ))}
            </ul>
          </div>
          <div className="userInfo">
            <div className="userName">
              <span>
                모나위<span>님&nbsp;&nbsp;</span>
              </span>
              <button
                onClick={this.handleMyCurator}
                className="fas fa-plus-circle"
              />
            </div>
            <div className="icons">
              <button className="fas fa-shopping-bag" />
              <button className="fas fa-user" />
              <button
                className="fas fa-search"
                onClick={this.handleSearchBox}
              />
            </div>
          </div>
        </div>
        <ContentType
          categories={menus[0]?.categories}
          class={hoveredIdx === 0 ? "ContentType shown" : "ContentType"}
        />
        <MonawePet
          class={hoveredIdx === 1 ? "MonawePet shown" : "MonawePet "}
        />
        <ListType
          subcategories={menus[2]?.subcategories}
          class={hoveredIdx === 2 ? "ListType shown" : "ListType"}
        />
        <ListType
          subcategories={menus[3]?.subcategories}
          class={hoveredIdx === 3 ? "ListType shown" : "ListType"}
        />
        <ContentType
          categories={menus[4]?.categories}
          class={hoveredIdx === 4 ? "ContentType shown" : "ContentType"}
        />

        <ListType
          subcategories={menus[5]?.subcategories}
          class={hoveredIdx === 5 ? "ListType shown" : "ListType"}
        />
      </div>
    );
  }
}

export default Nav;
