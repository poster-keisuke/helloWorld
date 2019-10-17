import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from './src/Components/Header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <Header />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#1e90ff',
  },
});
