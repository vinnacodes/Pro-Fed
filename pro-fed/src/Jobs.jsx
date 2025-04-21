import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobsdata, setJobsdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Track error

  useEffect(() => {
    const fetchJobs = async () => {
      const options = {
        method: "GET",
        url: "https://jobs-api14.p.rapidapi.com/search", // Hypothesized alternative
        params: {
          query: "developer", // Search term to fetch jobs
          language: "en_GB"
        },
        headers: {
          "x-rapidapi-key": "607eb2106dmsh445c7d92e25a72cp1e4923jsnf3ada6f30596", // Verify key
          "x-rapidapi-host": "jobs-api14.p.rapidapi.com"
        }
      };

      try {
        const response = await axios.get(options.url, {
          params: options.params,
          headers: options.headers
        });
        console.log("API Response:", response.data); // Inspect this
        if (response.data.hasError) {
          throw new Error(response.data.errors.join(", "));
        }
        // Assuming response.data is an array of jobs or contains a 'data' array
        setJobsdata(response.data.data || response.data); // Adjust based on structure
        setLoading(false);
      } catch (error) {
        console.error("Axios Error:", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <div className="jobarea">
        <h1>Jobs</h1>
        {loading ? (
          <p>Loading jobs...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : Array.isArray(jobsdata) ? (
          jobsdata.map((job) => (
            <div className="jobcard" key={job.id || Math.random()}>
              <p>
                {job.title || "No title"} at {job.company || "No company"} at{" "}
                {job.location || "No location"}
              </p>
            </div>
          ))
        ) : jobsdata.title ? (
          <div className="jobcard" key={jobsdata.id || Math.random()}>
            <p>
              {jobsdata.title} at {jobsdata.company} at {jobsdata.location}
            </p>
          </div>
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
    
  );
};

export default Jobs;