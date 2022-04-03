function MovieDetails(props) {
  return (
    <div style={{}}>
      <h2>Title: {props.title}</h2>
      <p>Runtime: {props.Runtime}</p>
      <p>Genre: {props.Genre}</p>
      <p>Director: {props.Director}</p>
      <p>Actors: {props.Actors}</p>
      <p>IMDB Rating: {props.imdbRating}</p>
      <div className="flex">
        {Array.isArray(props.Images) &&
          props.Images.map((image) => (
            <div className="flex-30 ">
              <img src={image} alt={props.Title} style={{ width: "100%" }} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieDetails;
