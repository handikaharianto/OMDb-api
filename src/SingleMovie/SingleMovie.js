import { Link, useParams } from "react-router-dom";
import Message from "../Message/Message";
import useFetch from "../useFetch";
import "./SingleMovie.css";

const SingleMovie = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(
    `https://www.omdbapi.com/?i=${id}&apikey=d33ca8b`
  );

  if (loading) {
    return (
      <section className="section-loading">
        <Message message="Loading..." />
      </section>
    );
  }

  const {
    Title,
    Released,
    Genre,
    Actors,
    Poster,
    Plot,
    Runtime,
    Rated,
    imdbRating,
    Writer,
  } = data;
  return (
    <main className="movie">
      <div className="movie-left">
        <div className="movie__img-container">
          <img
            className="movie__img"
            src={
              Poster === "N/A"
                ? `${process.env.PUBLIC_URL}/placeholder_img.png`
                : Poster
            }
            alt={Title}
          />
          <Link className="movie__back-btn" to="/">
            Back to Home
          </Link>
        </div>
      </div>
      <div className="movie-right">
        <h1 className="movie__title">{Title}</h1>
        <ul className="movie__info">
          <li>{Released}</li>
          <li>{Genre}</li>
          <li>{Runtime}</li>
          <li>{Rated}</li>
        </ul>
        <div className="movie__rating">
          <img
            className="movie__imdb"
            src={process.env.PUBLIC_URL + "/imdb.svg"}
            alt="IMDB"
          />
          <h4>
            {imdbRating}
            <sub>/10</sub>
          </h4>
        </div>
        <div className="movie__overview">
          <h5>overview</h5>
          <p className="movie__plot">{Plot}</p>
        </div>
        <div className="movie__writer">
          <h5>writers</h5>
          <ul>
            {Writer.split(",").map((writer, index) => {
              return (
                <li key={index}>
                  <h6>{writer}</h6>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="movie__actor">
          <h5>actors</h5>
          <ul>
            {Actors.split(",").map((actor, index) => {
              return (
                <li key={index}>
                  <h6>{actor}</h6>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SingleMovie;
