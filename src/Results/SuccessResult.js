import { Link } from "react-router-dom";
import "./Results.css";

const SuccessResult = ({ results }) => {
  return (
    <div className="results section-center">
      {results.map((item) => {
        const { Title, Poster, imdbID } = item;
        return (
          <Link to={`/movie/${imdbID}`} key={imdbID} className="item">
            <div className="item__content">
              <img className="item__img" src={Poster} alt={Title} />
              <h4 className="item__title">{Title}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SuccessResult;
