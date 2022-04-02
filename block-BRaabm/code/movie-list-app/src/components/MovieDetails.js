function MovieDetails(props) {
  return (
    <div>
      <h2>Title: {props}</h2>
      <p>Runtime: {props.Runtime}</p>
      <p>Genre: {props.Genre}</p>
      <p>Director: {props.Director}</p>
      <p>Actors: {props.Actors}</p>
      <p>IMDB Rating: {props.imdbRating}</p>
      {/* <div className="flex">
        {props.Images.map((image) => (
          <figure className="flex-30 ">
            <img src={image} alt={props.Title} style={{ width: "100%" }} />
          </figure>
        ))}
      </div> */}
    </div>
  );
}

export default MovieDetails;
