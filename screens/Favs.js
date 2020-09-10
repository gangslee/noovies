import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default () => {
  const getData = async () => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>Favs</Text>
    </View>
  );
};
