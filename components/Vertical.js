import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { apiImage } from '../api';
import Votes from './Votes';
import Poster from './Poster';

const Container = styled.View``;

const Title = styled.Text`
  color: white;
`;

const Vertical = ({ poster, title, votes }) => (
  <Container>
    <Poster url={apiImage(poster)} />
    <Title>{title}</Title>
    <Votes votes={votes} />
  </Container>
);

Vertical.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
