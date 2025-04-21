import React, {useState, useEffect } from'react';
import axios from axios;

import Navbar from "./Navbar";
const Companies =()=>{


 const [companydata, setCompanydata]= useState(null);
 const [loading,setLoading] =useState("Loading");


 useEffect ( async()=>{
      


const options = {
  method: 'GET',
  url: 'https://fresh-linkedin-scraper-api.p.rapidapi.com/api/v1/ad-library/search',
  params: {keyword: 'data'},
  headers: {
    'x-rapidapi-key': '607eb2106dmsh445c7d92e25a72cp1e4923jsnf3ada6f30596',
    'x-rapidapi-host': 'fresh-linkedin-scraper-api.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



 },[])

    return(

        <>

        <ul>

            <li>
            v

            </li>
        </ul>
        
        
        </>
    )
}
export default Companies;
