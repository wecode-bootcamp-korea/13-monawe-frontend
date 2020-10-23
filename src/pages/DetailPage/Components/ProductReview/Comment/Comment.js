import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  function = star => {
    let result = null;
    const test = <i class="fas fa-star" />;
    for (let i = 0; i < star; i++) {
      result = result + test;
    }
    return result;
  };

  render() {
    const { account, title, content, date, rating } = this.props.comment;
    console.log(rating);
    console.log();
    return (
      <div className="itemContainer">
        <div className="item">
          <strong className="itemTitle">{title}</strong>
          <span class="itemTxt">{content}</span>
          <div className="itemPayInfo">
            <span>{account}</span>
            <span>{date}</span>
          </div>
          <div className="smallStarGrade">{this.function(rating)}</div>
        </div>
      </div>
    );
  }
}

export default Comment;
