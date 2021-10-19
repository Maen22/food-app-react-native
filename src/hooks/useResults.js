import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");

  const searchApi = async (term) => {
    console.log(" Hi There");
    try {
      const response = await yelp.get("/search", {
        params: {
          term,
          limit: 50,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErr("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, err];
};
