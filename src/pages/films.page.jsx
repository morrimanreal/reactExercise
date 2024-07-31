import { useState, useEffect } from "react";
import "./FilmsPage.css";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";

export default function FilmsPage() {
  const [movies, setMovies] = useState([]);
  const [sortSelection, setSortSelection] = useState("title");
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch(console.error);
  }, []);

  function sortMovies(films, sortType) {
    switch (sortType) {
      case "releaseDate":
        return films.toSorted((a, b) => a.release_date - b.release_date);
      case "director":
        return films.toSorted((a, b) => {
          if (a.director > b.director) {
            return 1;
          } else if (a.director < b.director) {
            return -1;
          } else {
            return 0;
          }
        })
      case "title":
        return films.toSorted((a, b) => {
          if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          } else {
            return 0;
          }
        })
      case "score":
        return films.toSorted((a, b) => b.rt_score - a.rt_score);
    }
  }

  //derived State... sort = mutate the whole array, toSorted = sort the array and return a whole new sorted array
  const sortedMovies = sortMovies(movies, sortSelection);
  const filteredMovies = filterFilmsByDirector(sortedMovies, searchDirector);
  const uniqueDirectors = getListOf(movies, "director");

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className="formGroup">
          <label htmlFor="sortSelect">Sort by </label>
          <select
            name="sortSelect"
            id="sortSelect"
            value={sortSelection}
            onChange={(changeEvent) => {
              setSortSelection(changeEvent.target.value);
            }}
          >
            <option value="releaseDate"> Release Date</option>
            <option value="director"> Director</option>
            <option value="title"> Title</option>
            <option value="score"> Rotten Tomatoes Score</option>
          </select>
          <br />
          <label htmlFor="directorSelect">Filter by Director </label>
          <select
            name="directorSelect"
            id="directorSelect"
            value={searchDirector} onChange={(changeEvent) => {
              setSearchDirector(changeEvent.target.value);
            }}
          >
            <option value="">All Directors</option>
            {uniqueDirectors.map((director, index) => {
              return <option key={director + index} value={director}>
                {director}
              </option>
            })}
          </select>
        </div>

      </form>
      <ul>
        {filteredMovies.map((movie) => {
          return <li key={movie.id} className="movieCard">
            <h2>{movie.title}</h2>
            <div className="movieInfo">
              <p>{movie.description}</p>
              <img src={movie.image} alt={movie.title} />
            </div>
          </li>
        })}
      </ul>
    </>
  )

}