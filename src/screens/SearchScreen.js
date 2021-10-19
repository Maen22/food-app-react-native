import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation: { navigate } }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, err] = useResults();

  const filterResultsByPrice = (price) => {
    // pricce === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        currentTerm={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />

      {err ? <Text>{err}</Text> : null}

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
