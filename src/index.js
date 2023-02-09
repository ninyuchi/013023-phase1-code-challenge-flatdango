// Your code here
const db = "http://localhost:3000/films"

document.addEventListener("DOMContentLoaded", () => {
    getMovies();

});

function getMovies() {
    fetch(db)
    .then(res => res.json())
    .then(movies => {
        movies.forEach(movie => {renderMovieList(movie)})
        const firstMovie = document.querySelector("#id1");
        firstMovie.dispatchEvent(new Event("click"));
    })
}

function renderMovieList(movie) {
    const li = document.createElement("li");
    li.textContent = `${movie.title}`;
    li.id = "id" + movie.id;
    const ul = document.querySelector("#films");
    ul.appendChild(li);
    li.classList.add("film");
    li.classList.add('item');
    li.addEventListener("click", () => {handleMovieClick(movie)})
}

function handleMovieClick(movie) {
    const poster = document.querySelector("img#poster")
    poster.src = movie.poster;
    poster.alt = movie.title;
    const info = document.querySelector("#showing");
    info.querySelector("#title").textContent = movie.title;
    info.querySelector("#runtime").textContent = movie.runtime+" minutes";
    info.querySelector("#film-info").textContent = movie.description;
    info.querySelector("#showtime").textContent = movie.showtime;
    info.querySelector("#ticket-num").textContent = movie.capacity - movie.tickets_sold + " remaining tickets";
}