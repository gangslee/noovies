import React, { useState } from "react";
import { movieApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    movieError: null,
    showsError: null,
  });
  const onChange = (text) => {
    setKeyword(text);
  };
  const search = async () => {
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      movieError,
      showsError,
    });
  };
  console.log(results);
  return (
    <SearchPresenter
      {...results}
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
    />
  );
};
