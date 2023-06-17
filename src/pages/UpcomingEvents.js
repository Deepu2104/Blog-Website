import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEvents = async () => {
    setIsLoading(true);

    const url = 'https://ai10.p.rapidapi.com/news/page/1/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dc04cdc8f3msha41e30ba171925dp14f55fjsnd94740f22e15',
        'X-RapidAPI-Host': 'ai10.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setEvents(data.value);
      console.log(data.value);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="container">
      <h2 className="events-heading">Upcoming Events</h2>
      {isLoading ? (
        <div className="loader-container">
            <ThreeDots color="#007bff" height={50} width={50} />
          </div>
      ) : (
        events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-excerpt">{event.excerpt}</p>
              <a href={event.originalUrl} className="read-more-link" target="_blank" rel="noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UpcomingEvents;
