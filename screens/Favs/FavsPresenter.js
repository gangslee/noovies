import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Dimensions } from 'react-native';
import { apiImage } from '../../api';

const { width: WIDTH, height: HEIHGT } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Card = styled.View`
  top: 80px;
  height: ${HEIHGT / 1.5}px;
  width: 90%;
  position: absolute;
`;

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

export default ({ results }) => {
  return (
    <Container>
      {results.reverse().map((result) => (
        <Card key={result.id}>
          <Poster source={{ uri: apiImage(result.poster_path) }} />
        </Card>
      ))}
    </Container>
  );
};