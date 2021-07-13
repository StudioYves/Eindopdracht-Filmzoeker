// GET FILMS PER SELECTOR

const getLatestFilms = document.querySelector('#latestChoice');
const getAvengerFilms = document.querySelector('#avengerChoice');
const getXmenFilms = document.querySelector('#xmenChoice');
const getPrincessFilms = document.querySelector('#princessChoice');
const getBatmanFilms = document.querySelector('#batmanChoice');


// GET ALL RADIO BUTTONS TOGETHER
const getAllRadioButtons = document.querySelectorAll('input[name=moviefilter]');


// GET UNORDERED LIST
const getUL = document.querySelector('#movie-list')


//CLEAN DOM BEFORE NEW SELECTION
const removeSelection = () => {
    getUL.innerHTML = "";
}

//MAKE IMDB URL LINKS
const getImdbURL = () => {
    return ("https://www.imdb.com/title/" + movies.imdbID);
};


//VARIABLE FOR MOVIE INPUT > ADD TO DOM
let movieInput = movies;


//FUNTION ADD MOVIES TO THE DOM
const addMoviesToDom = (movieInput) => {
    const movieList = movieInput.map(film => {
        var newListElement = document.createElement("li");
        var newAnchorElement = document.createElement("a");
        var newImageElement = document.createElement("img");
        getUL.appendChild(newListElement);
        newListElement.appendChild(newAnchorElement);
        newAnchorElement.appendChild(newImageElement);
        newImageElement.src = film.Poster;
        newAnchorElement.href = "https://www.imdb.com/title/" + film.imdbID;
        newAnchorElement.target = "_blank";
    });
}

//EXECUTE ADD MOVIES TO THE DOM
addMoviesToDom(movieInput);


//FUNCTION TO FILTER MOVIES ON KEYWORD IN TITLE
const filterMovies = (wordInTitle) => {
    const result = movies.filter(function (movie) {
        return movie.Title.includes(wordInTitle)
    });
    addMoviesToDom(result);
};


//FUNCTION TO FILTER THE LATEST MOVIES
const filterLatestMovies = () => {
    const latestMovies = movies.filter((movie) => {
        return movie.Year >= 2014;
    });
    addMoviesToDom(latestMovies);
};


//FUNCTION TO PUT EVENT ON RADIOBUTTONS 
const handleOnChangeEvent = (event) => {
    switch (event.target.value) {
        case "avenger":
            console.log("hey ik ben een Avenger film");
            removeSelection();
            filterMovies("Avenger");
            break;
        case "xmen":
            console.log("hey ik ben een Xmen film");
            removeSelection();
            filterMovies("X-Men");
            break;
        case "princess":
            console.log("hey ik ben een Princess film");
            removeSelection();
            filterMovies("Princess");
            break;
        case "batman":
            console.log("hey ik ben een Batman film");
            removeSelection();
            filterMovies("Batman");
            break;
        case "latest":
            console.log("hey ik ben een recente film");
            removeSelection();
            filterLatestMovies();
            break;
        default:
            let movieInput = movies;
            console.log("ik ben default");
    }
};


// ADD EVENTLISTENERS TO ALL RADIOBUTONS
const addEventListeners = Array.from(getAllRadioButtons).forEach(function (moviefilter) {
    moviefilter.addEventListener('change', handleOnChangeEvent);
});




