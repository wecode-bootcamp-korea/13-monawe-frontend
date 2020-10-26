import React, { Component } from "react";
import "./Paging.scss";

export default class Paging extends Component {
  render() {
    return (
      <div class="Paging">
        <ul className="innerPaging">
          <li>&laquo;</li>
          <li>1</li>
          <li class="active" href="#">
            2
          </li>
          <li>3</li>
          <li>&raquo;</li>
        </ul>
      </div>
    );
  }
}
