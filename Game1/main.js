'use strict';

var ReactNative = require('react-native');
var React = require('react');
var {
  StyleSheet,
  Text,
  View,
} = ReactNative;

const {
  Component
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62',
  },
  tile: {
    width: 100,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  },
  letter: {
    color: '#333',
    fontSize: 80,
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const letter = 'A';
    return (
      <View style={styles.container}>
        <View style={styles.tile}>
          <Text style={styles.letter}>{letter}</Text>
        </View>
      </View>
    );
  }
}

module.exports = Main;