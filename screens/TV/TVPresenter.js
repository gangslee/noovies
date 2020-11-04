import React from 'react';
import styled from 'styled-components/native';
import Horizontal from '../../components/Horizontal';
import HorizontalSlider from '../../components/HorizontalSlider';
import List from '../../components/List';
import ScrollContainer from '../../components/ScrollContainer';
import Vertical from '../../components/Vertical';

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ loading, popular, topRated, today }) => (
  <ScrollContainer loading={loading}>
    <Container>
      <HorizontalSlider title="Popular Shows">
        {popular.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title="Top Rated">
        {topRated.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <List title="Airing Today">
        {today.map((show) => (
          <Horizontal
            key={show.id}
            id={show.id}
            title={show.name}
            overview={show.overview}
            poster={show.poster_path}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
