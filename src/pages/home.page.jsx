import { useState } from "react";
import "./HomePage.css"

export default function HomePage() {

  const [movieTitle, setMovieTitle] = useState("");
  const [movieList, setMovieList] = useState([]);

  return (
    <>
      <h1>Movies</h1>
      <form
        id="form"
        onSubmit={(submitEvent) => {
          submitEvent.preventDefault();
          setMovieList([...movieList, movieTitle]);
          setMovieTitle('');
        }}>
        <label htmlFor="movieInput">Enter movie to watch later  </label>
        <input
          type="text"
          name="movieInput"
          id="movieInput"
          onChange={(changeEvent) => {
            setMovieTitle(changeEvent.target.value)
          }}
        />
        <button>Submit</button>
      </form>

      <ul id='watchList'>
        {movieList.map((movie, index) => {
          return (
            <li key={index}>
              <span>{movie}</span>
              <button
                className="removeButton"
                onClick={() => {
                  //THis is where we update our state to remove the movie from our state list
                  const copyArr = Array.from(movieList);
                  //remove this specific item from the copied array
                  copyArr.splice(index, 1);
                  //update the state array to watch this copied array
                  setMovieList(copyArr);
                }}
              >Remove</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
