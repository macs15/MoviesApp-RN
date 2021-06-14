import axios from 'axios'

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: '9a57dde6f6cf60ed1b0df88e21891f7a',
    language: 'es-ES'
  }
})

export default movieDB
