export const requests = {
    latest : `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US`,
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&page=1`,
    top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&language=en-US&page=1`,
}
