import React, { useEffect, useState } from 'react';
import { movieApi, tvApi } from '../../api';
import DetailPresenter from './DetailPresenter';

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview, isTv },
  },
}) => {
  const [loading, setLoading] = useState(true);

  const [movie, setMovie] = useState({
    title,
    backgroundImage,
    poster,
    overview,
    votes,
  });

  const getData = async () => {
    if (isTv) {
      const [getMovie, getMovieError] = await tvApi.show(id);
    } else {
      const [getMovie, getMovieError] = await movieApi.movie(id);
    }
    setMovie({
      ...getMovie,
      title: getMovie.title,
      backgroundImage: getMovie.backdrop_path,
      poster: getMovie.poster_path,
      overview: getMovie.overview,
      votes: getMovie.vote_average,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  return <DetailPresenter movie={movie} loading={loading} />;
};
