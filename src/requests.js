const api_key = '965ad452a22ad622cdce2767a9dbc4ee'
export const requests = {
    latest : `https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=en-US`,
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,

}