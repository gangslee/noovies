import React, { useEffect, useState } from 'react';
import { tvApi } from '../../api';
import TVPresenter from './TVPresenter';

export default () => {
  const [shows, setShows] = useState({
    today: [],
    todayError: null,
    thisWeek: [],
    thisWeekError: null,
    topRated: [],
    topRatedError: null,
    popular: [],
    popularError: null,
    loading: true,
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setShows({
      today,
      todayError,
      thisWeek,
      thisWeekError,
      topRated,
      topRatedError,
      popular,
      popularError,
      loading: false,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return <TVPresenter {...shows} />;
};
