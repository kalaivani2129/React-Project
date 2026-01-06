import NewsCard from "./NewsCard";
import newsData from "./newsData";
import "./News.css";

const News = () => {
  return (
    <div className="news-container">
      <h1>Latest News Reports</h1>

      <div className="news-grid">
        {newsData.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default News;





