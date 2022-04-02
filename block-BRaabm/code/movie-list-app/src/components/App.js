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
  handleClick = (movieName) => {
    this.setState((prevState) => {
      return {
        isClicked: !prevState.isClicked,
        movie: movieName,
      };
    });
  };
  render() {
    // let selectedMovie =
    //   this.state.name && data.find((movie) => movie.Title === this.state.name);
    let selectedMovie;
    if (this.state.movie !== "") {
      selectedMovie = data.find((movie) => movie.Title === this.state.name);
    } else {
      selectedMovie = "Avatar";
    }
    console.log(selectedMovie);

    return (
      <div className="container">
        <h1>Movie List App</h1>
        <div className="flex">
          {data.map((movie) => (
            <div key={movie.Title} className="flex-30 box">
              <img src={movie.Images[0]} alt={movie.Title} />
              <h2>{movie.Title}</h2>
              <p>{movie.Released}</p>
              <button onClick={() => this.handleClick(movie.Title)}>
                More Info
              </button>
            </div>
          ))}
        </div>
        <div className={this.state.isClicked ? "visible absolute" : "hidden"}>
          <MovieDetails {...selectedMovie} />
          <span onClick={() => this.handleClick("")}>❌</span>
        </div>
      </div>
    );
  }
}

export default App;
