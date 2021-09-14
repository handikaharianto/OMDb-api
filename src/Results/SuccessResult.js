import { Link } from "react-router-dom";
import "./Results.css";

const SuccessResult = ({ results }) => {
  return (
    <div className="results results-grid section-center">
      {results.map((item) => {
        const { Title, Poster, imdbID } = item;
        return (
          <Link to={`/movie/${imdbID}`} key={imdbID} className="item">
            <article>
              <img className="item__img" src={Poster} alt={Title} />
              <h4 className="item__title">{Title}</h4>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default SuccessResult;
