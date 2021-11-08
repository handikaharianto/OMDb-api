import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      if (result.Error) {
        throw new Error(result.Error);
      }

      setData(result);
      setLoading(false);
      setError(null);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
