import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    const { user_id, title, content, created_at, rating } = this.props.comment;
    console.log(rating);
    const starDiv = [];
    const star = <i className="fas fa-star" />;

    for (let i = 0; i < rating; i++) {
      starDiv.push(star);
    }

    console.log();
    return (
      <div className="itemContainer">
        <div className="item">
          <strong className="itemTitle">{title}</strong>
          <span class="itemTxt">{content}</span>
          <div className="itemPayInfo">
            <span>{user_id}</span>
            <span>{created_at}</span>
          </div>
          <div className="smallStarGrade">{starDiv}</div>
        </div>
      </div>
    );
  }
}

export default Comment;
