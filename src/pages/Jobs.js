import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './Jobs.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setIsLoading(true);
    setIsError(false);

    const url = `https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=java`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dc04cdc8f3msha41e30ba171925dp14f55fjsnd94740f22e15',
        'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setJobs(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      setIsLoading(true);
      setIsError(false);

      const url = `https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=${searchQuery}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'dc04cdc8f3msha41e30ba171925dp14f55fjsnd94740f22e15',
          'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setJobs(data.data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="container jobs-container">
      <h2 className="jobs-heading">Job Openings</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <div className="form-group">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs..."
            className="form-control search-input"
          />
        </div>
        <button type="submit" className="btn btn-primary search-button">
          Search
        </button>
      </form>
      <div className="row">
        {isLoading ? (
          <div className="loader-container">
            <ThreeDots color="#007bff" height={50} width={50} />
          </div>
        ) : isError ? (
          <p>Error occurred while fetching jobs.</p>
        ) : jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <div className="col-md-6" key={job.id}>
              <div className="card job-card">
                <div className="card-body">
                  <h5 className="card-title job-title">{job.title}</h5>
                  <p className="card-text">
                    <span className="job-company">Company: {job.company}</span>
                    <br />
                    <span className="job-date">Posted: {job.date}</span>
                  </p>
                  <a href={job.url} className="btn btn-primary" target="_blank" rel="noreferrer">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs Found. Api Calls limit reached</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
