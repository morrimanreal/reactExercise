import { useState, useEffect } from "react";
import "./FilmsPage.css";

export default function FilmsPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <ul>
        {movies.map((movie) => {
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