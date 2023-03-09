import { useState } from "react";

export function useFetch(url = undefined) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [constroller, setConroller] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setConroller(abortController);

    // Asynchrony function is called
    async function fetchData() {
      try {
        const response = await fetch(url, { signal: abortController.signal });
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.error("Request aborted", error);
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
      return () => {
        abortController.abort();
      };
      fetchData();
    }
  }, [url]);

  // Abort fetching if the user presses
  const handleCancelRequest = () => {
    if (constroller) {
      constroller.abort();
      setError("Request cancelled by user");
    }
  };
  return { data, error, loading, handleCancelRequest };
}
