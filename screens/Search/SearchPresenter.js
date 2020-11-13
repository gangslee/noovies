import React from "react";
import styled from "styled-components/native";
import HorizontalSlider from "../../components/HorizontalSlider";
import Input from "../../components/Search/Input";
import Vertical from "../../components/Vertical";

const Container = styled.ScrollView`
  background-color: black;
`;

export default ({ movies, shows, keyword, onSubmit, onChange }) => (
  <Container
    contentContainerStyle={{
      paddingTop: 10,
    }}
  >
    <Input
      placeholder="Write a keyword"
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title="Movie Results">
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            votes={movie.vote_average || movie.backdrop_path}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title="TV Results">
        {shows.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            votes={show.vote_average}
            title={show.name}
            poster={show.poster_path}
          />
        ))}
      </HorizontalSlider>
    )}
  </Container>
);
