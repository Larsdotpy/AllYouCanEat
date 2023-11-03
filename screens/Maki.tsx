import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const Mars = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Mars</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default Mars;