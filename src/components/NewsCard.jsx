// NewsCard.jsx
import "./News.css";

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img src={news.image} alt={news.title} />
      <div className="news-content">
        <h3>{news.title}</h3>
        <span className="category">{news.category}</span>
        <p>{news.description}</p>
        <div className="news-footer">
          <span>✍ {news.author}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;