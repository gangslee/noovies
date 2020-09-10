import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {tvApi} from '../api';

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
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>{shows.popular?.length}</Text>
    </View>
  );
};
