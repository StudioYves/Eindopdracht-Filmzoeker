const getLatestFilms = document.querySelector('#latestChoice');
const getAvengerFilms = document.querySelector('#avengerChoice');
const getXmenFilms = document.querySelector('#xmenChoice');
const getPrincessFilms = document.querySelector('#princessChoice');
const getBatmanFilms = document.querySelector('#batmanChoice');

const getUL = document.querySelector('#movie-list')

const getAllRadioButtons = document.querySelectorAll('input[name=moviefilter]');


const addMoviesToDom = movies.map(film => {
    var newListElement = document.createElement("li")
    var newImageElement = document.createElement("img")
    getUL.appendChild(newListElement);
    newListElement.appendChild(newImageElement);
    newImageElement.src = film.Poster
});

const filterMovies = (wordInTitle) => {
    const filterOnTitle = movies.filter(film => {
        film.Title;
    });
    if (filterOnTitle.includes(wordInTitle)) {
        return console.log(film);
    };
}












const handleOnChangeEvent = (event) => {
    switch (event.target.value) {
        case "avenger":
            console.log("hey ik ben een Avenger film");
            filterMovies("Avenger");
            break;
        case "xmen":
            console.log("hey ik ben een Xmen film");
            filterMovies("X-Men");
            break;
        case "princess":
            console.log("hey ik ben een Princess film");
            filterMovies("Princess");
            break;
        case "batman":
            console.log("hey ik ben een Batman film");
            filterMovies("Batman");
            break;
        case "latest":
            console.log("hey ik ben een recente film");
            break;
        default:
            console.log("ik ben default");
    }
};


const addEventListeners = Array.from(getAllRadioButtons).forEach(function (moviefilter) {
    moviefilter.addEventListener('change', handleOnChangeEvent);
});




