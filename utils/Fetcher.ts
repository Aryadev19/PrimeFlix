import axios from "axios";
const ENDPOINT = process.env.TMDB_ENDPOINT;
const API_KEY = process.env.TMDB_API_KEY;
const CONSUMET = process.env.CONSUMET_API_URL
export async function NowPlayingMovie(page:any=1){
    const response = await axios.get(
        `${ENDPOINT}/movie/now_playing?api_key=${API_KEY}&page=${page}`
      );
      var data = response.data.results;
      return data;
}
export async function TrendingMovie(page:any=1){
  const response = await axios.get(
      `${ENDPOINT}/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );
    var data = response.data.results;
    return data;
}
export async function TopRatedMovie(page:any=1){
  const response = await axios.get(
      `${ENDPOINT}/movie/top_rated?api_key=${API_KEY}&page=${page}`
    );
    var data = response.data.results;
    return data;
}

export async function UpcomingMovie(page:any=1){
  const response = await axios.get(
      `${ENDPOINT}/movie/upcoming?api_key=${API_KEY}&page=${page}`
    );
    var data = response.data.results;
    return data;
}

export async function AiringTvSeries(){
  const response = await axios.get(
      `${ENDPOINT}/tv/on_the_air?api_key=${API_KEY}&page=1`
    );
    var data = response.data.results;
    return data;
}
export async function TrendingTvSeries(){
  const response = await axios.get(
      `${ENDPOINT}/trending/tv/week?api_key=${API_KEY}&page=1`
    );
    var data = response.data.results;
    return data;
}

export async function TopRatedTvSeries(){
  const response = await axios.get(
      `${ENDPOINT}/tv/top_rated?api_key=${API_KEY}&page=1`
    );
    var data = response.data.results;
    return data;
}

export async function getSearchResults(query:string){
  const response = await axios.get(`${ENDPOINT}/search/multi?api_key=${API_KEY}&query=${query}&page=1`);
  var data = response.data.results;
  return data;
}

export async function findMovie(id:string){
  const response = await axios.get(`${ENDPOINT}/movie/${id}?api_key=${API_KEY}`);
  var data = response.data;
  return data;
}

export async function findTV(id:string){
  const response = await axios.get(`${ENDPOINT}/tv/${id}?api_key=${API_KEY}`);
  var data = response.data;
  return data;
}

export async function relatedMovies(id: string){
  const response = await axios.get(`${ENDPOINT}/movie/${id}/recommendations?api_key=${API_KEY}`);
  var data = response.data.results;
  return data;
}

export async function getMovieCasts(id: string){
  const response = await axios.get(`${ENDPOINT}/movie/${id}/credits?api_key=${API_KEY}`);
  var data = response.data.cast;
  return data;
}
export async function getTVCasts(id: string){
  const response = await axios.get(`${ENDPOINT}/tv/${id}/credits?api_key=${API_KEY}`);
  var data = response.data.cast;
  return data;
}

export async function SeasonDetails(id: string,idx: string){
  const response = await axios.get(`${ENDPOINT}/tv/${id}/season/${idx}?api_key=${API_KEY}`);
  var data = response.data.episodes;
  return data;
}

// ------------------------------------------------------------------------------------------------
// ANIME REQUEST
// ------------------------------------------------------------------------------------------------
export async function getAnimeInfo(id: string){
  const response = await axios.get(`${CONSUMET}/meta/tmdb/info/${id}?type=tv`);
  var data = response.data;
  return data;
}

export async function watchAnime(epsId:any,showId:any){
  const response = await axios.get(`${CONSUMET}/meta/tmdb/watch/${epsId}?id=${showId}`);
  var data = response.data;
  return data;
}

