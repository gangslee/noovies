import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Title from './Title';
import Horizontal from './Horizontal';

const HorizontalSlider = ({ title, children }) => (
  <>
    <Title title={title} />
    <ScrollView
      style={{ marginTop: 20, marginBottom: 40 }}
      contentContainerStyle={{ paddingLeft: 30 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </>
);

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
