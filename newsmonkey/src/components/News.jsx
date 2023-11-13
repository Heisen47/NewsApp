import { useEffect , useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


    const UpdateNews= async()=> {
    props.setProgress(20)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true)

    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50)
    // console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    UpdateNews();
  }, [])
  


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };


    return (
      <>
        <h2 className="my-5 mx-3 p-3"> Top Headlines of the day</h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={ fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              { articles.map((e) => {
                return (
                  <div className="col-md-4" key={e.url + Math.random()}>
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
          </div>
        </InfiniteScroll>
      </>
    );

}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  apiKey: PropTypes.any,
  category: PropTypes.string,
  setProgress : PropTypes.func
};

export default News;
