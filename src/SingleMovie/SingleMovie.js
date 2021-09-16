import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Loading from "../Loading/Loading";
import "./SingleMovie.css";

const SingleMovie = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(
    `https://www.omdbapi.com/?i=${id}&apikey=d33ca8b` // Should've used .env file but it didn't work out
  );

  if (loading) {
    return (
      <section className="section-loading">
        <Loading />
      </section>
    );
  }

  const { Title, Released, Genre, Director, Actors, Poster, Plot } = data;
  return (
    <section className="section-movie">
      <div className="movie section-center">
        <div className="back-btn">
          <Link className="back-btn__link" to="/">
            Back to Home
          </Link>
        </div>
        <div className="movie-content">
          <div className="movie-content__poster">
            <img src={Poster} alt="" />
          </div>
          <div className="movie-content__text">
            <h2 className="movie-content__title">{Title}</h2>
            <div className="movie-content__info">
              <p className="movie-content__genre bold-text">{Genre}</p>
              <p className="movie-content__released bold-text">{Released}</p>
            </div>
            <p className="movie-content__director">
              <span className="bold-text">Director: </span>
              {Director}
            </p>
            <p className="movie-content__actors">
              <span className="bold-text">Actors: </span> {Actors}
            </p>
            <p className="movie-content__plot">{Plot}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
