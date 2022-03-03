import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="card my-3">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{zInex: 1, left: '90%'}}>{source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img
            src={
              !imgUrl
                ? "https://images.hindustantimes.com/tech/img/2022/02/11/1600x900/udiijkl_1644546061619_1644546089271.JPG"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark ">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
