import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobsdata, setJobsdata] = useState([]);






  useEffect(() => {

    const fetchjobs =async ()=>{


        const options ={
            method: 'GET',
            url: 'https://jobs-api14.p.rapidapi.com/get',
            params: {
              id: '[JOB_ID]',
              language: 'en_GB'
            },
            headers: {
              'x-rapidapi-key': '607eb2106dmsh445c7d92e25a72cp1e4923jsnf3ada6f30596',
              'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
            }
          };


        try{

            const response = awaitaxios.get(options)

            console.log(response);
            
        }
        catch(error)
    }
    
    


      
  }, []);

  return (
    <div>

        <div className="jobarea">
      <h1>Jobs</h1>
     {jobsdata.map((job)=>  
     <div className="jobcard">
     <p key={job.id}>
        
         {job.title} at {job.company} at {job.location}</p>
        
        </div>
        
        )}</div>
    </div>
  );
};

export default Jobs;