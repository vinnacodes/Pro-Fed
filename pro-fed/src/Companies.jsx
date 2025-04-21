import { useState, useEffect } from 'react';
import axios from 'axios';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://fresh-linkedin-scraper-api.p.rapidapi.com/api/v1/ad-library/search',
          params: { keyword: 'data' },
          headers: {
            'x-rapidapi-key': '607eb2106dmsh445c7d92e25a72cp1e4923jsnf3ada6f30596',
            'x-rapidapi-host': 'fresh-linkedin-scraper-api.p.rapidapi.com'
          }
        ,
        };

        const response = await axios.request(options);
        // Adjust based on actual API response structure
        setCompanies(response.data.results || response.data || []);
      } catch (error) {
        console.error('Error fetching companies:', error);
        setError('Failed to fetch companies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Companies</h1>
      {companies.length > 0 ? (
        <ul>
          {companies.map((company, index) => (
            <li key={index}>
              {/* Adjust based on actual data structure */}
              {company.name || 'Unnamed Company'}
            </li>
          ))}
        </ul>
      ) : (
        <p>No companies found.</p>
      )}
    </div>
  );
};

export default Companies;