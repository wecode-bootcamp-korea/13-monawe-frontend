import React, { Component } from "react";
import MENUS from "./Navdata";
import ContentType from "./MenuDropBox/ContentType";
import MonawePet from "./MenuDropBox/MonawePet";
import ListType from "./MenuDropBox/ListType";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      menus: MENUS,
      hoveredIdx: ""
    };
  }

  handleMenuStyle = idx => {
    this.setState({ hoveredIdx: idx });
  };

  handleDropBox = () => {
    this.setState({ hoveredIdx: "" });
  };

  handleMyCurator = e => {
    this.props.onMyCurator(e);
  };

  handleSearchBox = e => {
    this.props.onSearchBox(e);
  };

  render() {
    const { menus, hoveredIdx } = this.state;
    const { userName } = this.props;

    return (
      <div className="Nav">
        <div className="navMenu">
          <div className="menuTab">
            <div>
              <button className="fas fa-bars" />
              <Link to="/">
                monawe<span>mall</span>
              </Link>
            </div>
            <ul className="menuLists">
              {menus.map((menu, idx) => (
                <div
                  key={idx}
                  className="menu"
                  onMouseOver={() => this.handleMenuStyle(idx)}
                >
                  <small>{menu.koreanName}</small>
                  <span>{menu.englishName}</span>
                </div>
              ))}
            </ul>
          </div>
          <div className={userName ? "userInfo" : "userInfo inactive"}>
            <div className={userName ? "userName" : "userName inactive"}>
              <span>
                {userName}
                <span>님&nbsp;&nbsp;</span>
              </span>
              <button
                onClick={this.handleMyCurator}
                className="fas fa-plus-circle"
              />
            </div>
            <div className="icons">
              <Link to="/Cart" className="fas fa-shopping-bag" />
              <div className="popUpBoxWrap">
                <button className="fas fa-user" />
                <div className={userName ? "popUpBox inactive " : "popUpBox "}>
                  <div>horn</div>
                  <ul>
                    <Link to="/Login">로그인</Link>
                    <Link to="/Welcome">회원가입</Link>
                    <li>비회원로그인</li>
                  </ul>
                </div>
              </div>
              <button
                className="fas fa-search"
                onClick={this.handleSearchBox}
              />
            </div>
          </div>
        </div>
        <ContentType
          categories={menus[0]?.categories}
          className={
            hoveredIdx === 0 ? "contentType stationeryShown" : "contentType"
          }
          onDropBox={this.handleDropBox}
        />
        <MonawePet
          className={hoveredIdx === 1 ? "monawePet shown" : "monawePet"}
          onDropBox={this.handleDropBox}
        />
        <ListType
          subcategories={menus[2]?.subcategories}
          className={hoveredIdx === 2 ? "listType shown" : "listType"}
          onDropBox={this.handleDropBox}
        />
        <ListType
          subcategories={menus[3]?.subcategories}
          className={hoveredIdx === 3 ? "listType shown" : "listType"}
          onDropBox={this.handleDropBox}
        />
        <ContentType
          categories={menus[4]?.categories}
          className={
            hoveredIdx === 4 ? "contentType storypickShown" : "contentType"
          }
          onDropBox={this.handleDropBox}
        />

        <ListType
          subcategories={menus[5]?.subcategories}
          className={hoveredIdx === 5 ? "listType shown" : "listType"}
          onDropBox={this.handleDropBox}
        />
      </div>
    );
  }
}

export default Nav;
