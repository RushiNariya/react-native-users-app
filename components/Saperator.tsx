import {View, StyleSheet} from 'react-native';
import React from 'react';

const Saperator = () => {
  return <View style={styles.saperator} />;
};

const styles = StyleSheet.create({
  saperator: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 23,
    borderWidth: 0.5,
    paddingHorizontal: 16,
    marginVertical: 6,
    backgroundColor: '#959090',
    opacity: 0.1,
  },
});

export default Saperator;
