/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WKWebView from 'react-native-wkwebview-reborn';

export default class wkwebview_test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WKWebView style={{ backgroundColor: '#ff0000' }}  ref="webview" source={{ uri: 'https://www.google.com' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('wkwebview_test', () => wkwebview_test);
