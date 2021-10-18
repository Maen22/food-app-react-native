import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View>
      <SearchBar
        currentTerm={searchTerm}
        onTermChange={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => console.log("submitted")}
      />
      <Text>{searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
