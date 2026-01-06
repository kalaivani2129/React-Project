import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./NewsBoard.css";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        
        const uniqueArticles = data.articles?.filter(
          (v, i, a) => a.findIndex((t) => t.url === v.url) === i
        ) || [];

        setArticles(uniqueArticles);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    fetchNews();
  }, [category]);

  if (!articles.length) return <p className="text-center mt-3">Loading news...</p>;

  return (
    <div className="news-board container my-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">{category}</span> News
      </h2>

      <div className="row">
        {articles.map((news, idx) => (
          <div key={idx} className="col-md-4 mb-3">
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              category={category}
              publishedAt={news.publishedAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
