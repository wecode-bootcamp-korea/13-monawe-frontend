import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "./Nav/Nav";
import MyCurator from "./MyCurator/MyCurator";
import SearchBox from "./SearchBox/SearchBox";
import "./NavContainer.scss";

class NavContainer extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      isMyCurator: false,
      isSearchBox: false
    };
  }

  componentDidMount() {
    const userName = localStorage.getItem("name");
    this.setState({ userName });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ userName: localStorage.getItem("name") });
    }
  }

  handleMyCurator = () => {
    this.setState({ isMyCurator: !this.state.isMyCurator });
  };

  handleSearchBox = () => {
    this.setState({ isSearchBox: !this.state.isSearchBox });
  };

  handleLogOut = () => {
    localStorage.clear();
    this.setState({ isMyCurator: false, isSearchBox: false });
  };

  render() {
    const { userName, isMyCurator, isSearchBox } = this.state;
    return (
      <header className="NavContainer">
        <Nav
          userName={userName}
          onMyCurator={this.handleMyCurator}
          onSearchBox={this.handleSearchBox}
        />
        <MyCurator
          userName={userName}
          isMyCurator={isMyCurator}
          onMyCurator={this.handleMyCurator}
          onLogOut={this.handleLogOut}
        />
        <SearchBox
          isSearchBox={isSearchBox}
          onSearchBox={this.handleSearchBox}
        />
      </header>
    );
  }
}

export default withRouter(NavContainer);
