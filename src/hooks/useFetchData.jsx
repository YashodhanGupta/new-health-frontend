import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error on new fetch

      try {
        const token = localStorage.getItem("token"); // Retrieve token dynamically

        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,  // Ensure token is passed
            "Content-Type": "application/json",
          },
        });
        

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Failed to fetch data");
        }

        setData(result.data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
