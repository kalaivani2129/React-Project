
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
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    fetchNews();
  }, [category]);

  const fullRowsArticles = [...articles];
  const remainder = articles.length % 3;
  if (remainder !== 0) {
    const placeholders = new Array(3 - remainder).fill(null);
    fullRowsArticles.push(...placeholders);
  }

  return (
    <div className="news-board">
      <h2 className="text-center mt-3 mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="news-grid">
        {fullRowsArticles.map((news, index) =>
          news ? (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              category={category}
              publishedAt={news.publishedAt}
            />
          ) : (
            <div key={index} className="news-card placeholder"></div>
          )
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
