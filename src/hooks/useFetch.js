import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMenuPizzas = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setData(data.data);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMenuPizzas();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
