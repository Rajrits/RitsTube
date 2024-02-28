import axios from 'axios'
const URL_BASE = 'https://youtube-v31.p.rapidapi.com'
const options = {
  
  url: URL_BASE,
  params: {
 
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchFromApi = async(url) =>{
    const {data} = await axios.get(`${URL_BASE}/${url}`,options);
    return data;
}