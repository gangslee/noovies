import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Poster from './Poster';
import Votes from './Votes';
import { apiImage } from '../api';

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View``;

const Title = styled.Text`
  color: white;
  font-weight: 500;
`;

const Horizontal = ({ id, title, poster, votes, overview }) => (
  <Container>
    <Poster url={apiImage(poster)} />
    <Data>
      <Title>{title}</Title>
      <Votes votes={votes} />
    </Data>
  </Container>
);

Horizontal.proptypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Horizontal;
