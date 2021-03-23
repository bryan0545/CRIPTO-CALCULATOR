import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinList from './modules/CoinList'

export default function App() {
  return (
    <View style={styles.container}>
      <CoinList/>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
