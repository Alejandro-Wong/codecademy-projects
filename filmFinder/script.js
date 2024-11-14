// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTdkZjEyNTAyMTU5ZDliYzU3YTc4M2NjZmUxMDIzMCIsIm5iZiI6MTcyNjU5NjIzMS44NjI0OTQsInN1YiI6IjY2ZTljM2M1YjY2NzQ2ZGQ3OTBhZWVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eEoDyt4qzn1p794iedCHvg_tmCEIhnxD3hhU54qaRJ4
// access token


const tmdbKey = '6e7df12502159d9bc57a783ccfe10230';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
    const genreRequestEndpoint = '/genre/movie/list';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            const genres = jsonResponse.genres;
            return genres
        }
    } catch(error){
        console.log(error);
    };
};

const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    discoverMovieEndpoint = '/discover/movie'
    const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
    const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

    try{
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const movies = jsonResponse.results;
            return movies; 
        };
    } catch(error) {
        console.log(error);
    };
};


const getMovieInfo = async (movie) => {
    const movieId = movie.id; 
    const movieEndpoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const movieInfo = jsonResponse;
            return movieInfo;
        };
    } catch(error){
        console.log(error);
    }
};

// Get list of movies and display info of a random movie from list
const showRandomMovie = async () => {
    const movieInfo = document.getElementById('movieInfo');
    if (movieInfo.childNodes.length > 0){
        clearCurrentMovie();
    };
    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
