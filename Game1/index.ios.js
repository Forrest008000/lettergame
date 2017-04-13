'use strict';

const ReactNative = require('react-native');
const Main = require('./main.js');
const {
  AppRegistry
} = ReactNative;

AppRegistry.registerComponent('Game1', function() {
  return Main;
})
