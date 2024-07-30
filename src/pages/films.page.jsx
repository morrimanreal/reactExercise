import { useState, useEffect } from "react";
import "./FilmsPage.css";

export default function FilmsPage() {
  const [movies, setMovies] = useState([]);
  const [sortSelection, setSortSelection] = useState("releaseDate");

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

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <label htmlFor="sortSelect">Sort by: </label>
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
      <ul>
        {sortedMovies.map((movie) => {
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