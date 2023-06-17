import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './NewsFeed.css';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setIsLoading(true);

    const url = 'https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=30';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dc04cdc8f3msha41e30ba171925dp14f55fjsnd94740f22e15',
        'X-RapidAPI-Host': 'cnbc.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setNews(data.data.mostPopularEntries.assets);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="news-feed-container">
      <h2 className="news-feed-heading">Latest News</h2>
      <div className="news-items">
        {isLoading ? (
          <div className="loader-container">
            <ThreeDots color="#007bff" height={50} width={50} />
          </div>
        ) : news && news.length > 0 ? (
          news.map((item) => (
            <div className="news-item" key={item.id}>
              <img src={item.promoImage.url} alt="News" className="news-image" />
              <div className="news-content">
                <h3 className="news-title">{item.shorterHeadline}</h3>
                <p className="news-description">{item.description}</p>
                <a href={item.url} className="read-more-link">Read More</a>
              </div>
            </div>
          ))
        ) : (
          <p>No News Found. API Calls limit Reached!</p>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
