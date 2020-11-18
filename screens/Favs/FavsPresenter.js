import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, PanResponder, Animated } from 'react-native';
import { apiImage } from '../../api';

const { width: WIDTH, height: HEIHGT } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const styles = {
  top: 80,
  height: HEIHGT / 1.5,
  width: '90%',
  position: 'absolute',
};

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

export default ({ results }) => {
  const position = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
  });

  return (
    <Container>
      {results.reverse().map((result) => (
        <Animated.View
          style={{
            ...styles,
            transform: [...position.getTranslateTransform()],
          }}
          key={result.id}
          {...panResponder.panHandlers}
        >
          <Poster source={{ uri: apiImage(result.poster_path) }} />
        </Animated.View>
      ))}
    </Container>
  );
};
