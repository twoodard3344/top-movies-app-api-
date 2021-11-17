const URL = `https://imdb-api.com/en/API/MostPopularMovies/k_3o3inkp6`;
const imgPath = `https://m.media-amazon.com/images/M/`

async function getMovies()
{
    const resp = await fetch(URL);
    const respData = await resp.json();

    respData.items.forEach((movie) => {



        const movieEL = document.createElement('div');
        movieEL.classList.add("movie");
        
        movieEL.innerHTML = `
        <img src = ${movie.image} />
        <div class="movie-info">
        <h3>${movie.fullTitle}</h3>
        <span>${movie.imDbRating}</span>
        </div>
        `
        document.body.appendChild(movieEL);
       
    });

    return respData;
}

getMovies()
