import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErr("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        currentTerm={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={searchApi}
      />
      {err ? <Text>{err}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
