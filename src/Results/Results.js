import Loading from "../Loading/Loading";
import useFetch from "../useFetch";
import ErrorResult from "./ErrorResult";
import SuccessResult from "./SuccessResult";

const Results = ({ searchParameter }) => {
  const { data, loading } = useFetch(
    `https://www.omdbapi.com/?s=${searchParameter}&apikey=${process.env.REACT_APP_API_KEY}`
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section-results">
      {data.Response === "True" ? (
        <SuccessResult results={data.Search} />
      ) : (
        <ErrorResult />
      )}
    </section>
  );
};

export default Results;
