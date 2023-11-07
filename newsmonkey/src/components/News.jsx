import { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    apiKey: "681d37a16f38415eaaa33d6ce7acc640",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.any,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async UpdateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
  this.UpdateNews()
  }

  handleNextClick = async () => {
    this.setState({page : this.state.page + 1 })
    this.UpdateNews();
  };

  handlePrevClick = async () => {
    this.setState({page : this.state.page - 1 })
    this.UpdateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h2> Top Headlines of the day</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItems
                    title={e.title ? e.title.slice(0, 40) : ""}
                    description={
                      e.description ? e.description.slice(0, 60) : ""
                    }
                    imgUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
