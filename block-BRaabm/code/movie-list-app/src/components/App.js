import React from "react";
import data from "../data.json";
import MovieDetails from "./MovieDetails";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      movie: "",
    };
  }
  handleClick = (movie) => {
    this.setState((prevState) => {
      return {
        isClicked: !prevState.isClicked,
        movie: movie,
      };
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Movie List App</h1>
        <div className="flex">
          {data.map((movie) => (
            <div key={movie.Title} className="flex-30 box">
              <img src={movie.Images[0]} alt={movie.Title} />
              <h2>{movie.Title}</h2>
              <p>{movie.Released}</p>
              <button onClick={() => this.handleClick(movie)}>More Info</button>
            </div>
          ))}
        </div>
        <div
          className={
            this.state.isClicked ? "container visible absolute flex" : "hidden"
          }
        >
          {this.state.movie && <MovieDetails {...this.state.movie} />}
          <span onClick={() => this.handleClick("")}>❌</span>
        </div>
      </div>
    );
  }
}

export default App;
