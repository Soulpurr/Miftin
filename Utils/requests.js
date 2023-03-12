const API_KEY = process.env.API_KEY;
export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchToprated: {
    title: "Top Rated",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchaction: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },
  fetchHorror: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchAdventure: {
    title: "Adventure",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=22`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
};
