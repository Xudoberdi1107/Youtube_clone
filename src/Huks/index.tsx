import axios from "axios"; 

const instance = axios.create({
  baseURL : 'https://youtube-v31.p.rapidapi.com/captions',
  headers: {
    'X-RapidAPI-Key': '526e36b612msh866ecf5ef390cc6p140056jsn45b46592ee13',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
  params: {
    maxResults: '100',
  },
});

export default instance;