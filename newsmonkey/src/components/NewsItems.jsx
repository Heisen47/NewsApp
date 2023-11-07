import { Component } from "react";
import PropTypes from "prop-types";

export class NewsItems extends Component {
  render() {
    let {title , description ,imgUrl ,newsUrl , author , date} = this.props
    return (
      <div>
        <div className="card">
          <img src={!imgUrl?"https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=2048x2048&w=is&k=20&c=ZyHCcX0F_DVM-r_R_vG8OX_CqYLb-G16afTyaVGtB3o=":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-body-secondary">by {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href= {newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;

NewsItems.propTypes = {
    title : PropTypes.string,
    description :PropTypes.string,
    imgUrl : PropTypes.string,
    newsUrl : PropTypes.string,
    author :PropTypes.string,
    date : PropTypes.string
}
