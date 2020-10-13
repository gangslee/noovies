import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import {ActivityIndicator} from 'react-native';
import Slide from '../../components/Movies/Slide';

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

export default ({loading, nowPlaying}) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              backgroundImage={movie.backdrop_path}
              title={movie.original_title}
              overview={movie.overview}
              votes={movie.vote_average}
            />
          ))}
        </Swiper>
      </>
    )}
  </Container>
);
