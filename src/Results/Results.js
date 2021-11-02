import Message from "../Message/Message";
import useFetch from "../useFetch";
import SuccessResult from "./SuccessResult";

const Results = ({ searchParameter }) => {
  const {
    data: { Search: results },
    loading,
    error,
  } = useFetch(
    `https://www.omdbapi.com/?s=${searchParameter}&apikey=d33ca8b` // Did try to use .env file but doesn't work after deployment.
  );

  return (
    <section className="section-results">
      {loading ? (
        <Message message="Loading..." />
      ) : error ? (
        <Message message={error} />
      ) : (
        <SuccessResult results={results} />
      )}
    </section>
  );
};

export default Results;
