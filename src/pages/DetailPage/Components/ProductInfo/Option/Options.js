import "./Options.scss";
import React, { Component } from "react";

class Options extends Component {
  render() {
    const { productInfo } = this.props;
    console.log(productInfo);

    return (
      <>
        {options.map(el => (
          <div onClick={this.props.handleAdd} price={price} option={el}>
            {el}
          </div>
        ))}{" "}
      </>
    );
  }
}

export default Options;
