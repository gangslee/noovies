import React from "react";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import Input from "../../components/Search/Input";

const Container = styled.ScrollView`
  background-color: black;
`;

export default ({ keyword, onSubmit, onChange }) => (
  <Container>
    <Input
      placeholder="Write a keyword"
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    <HorizontalSlider title="Movie Results">
      {movies.map((movie) => (
        <Horizontal />
      ))}
    </HorizontalSlider>
    <HorizontalSlider title="TV Results">
      {shows.map((show) => (
        <Horizontal />
      ))}
    </HorizontalSlider>
  </Container>
);
