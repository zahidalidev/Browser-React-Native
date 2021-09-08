import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";

import Browser from './app/Browser';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.browser}>
        <Browser />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  browser: {
    flex: 1,
    flexDirection: 'row'
  },
  header: {
    height: 65,
    paddingTop: 25,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20
  },
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
});
