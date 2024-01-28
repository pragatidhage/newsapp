import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    //destructuring props will load and will return title and description
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "95%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imgUrl
                ? "https://www.livemint.com/lm-img/img/2024/01/25/1600x900/narendra_modi_1706149904523_1706149904988.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
