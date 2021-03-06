'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginLeft: 15,
    marginRight: 15,
  },
  base: {
    borderColor: '#000000',
    borderWidth: 5,
  },
  stockContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
  },
  symbol: {
    flex: 1,
  },
  symbolText: {
    fontSize: 15,
    marginBottom: 10,
    color: 'white',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 4,
    marginRight: 10,
  },
  price: {
    flex: 1,
  },
  priceText: {
    fontSize: 15,
    marginBottom: 10,
    color: 'white',
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 4,
    marginRight: 10,
  },
  changeRed: {
    backgroundColor: '#FC3D39',
    flex: 1,
    margin: 6,
    padding: 6,
    borderRadius: 3.
  },
  changeGreen: {
    backgroundColor: '#53D769',
    flex: 1,
    margin: 6,
    padding: 6,
    borderRadius: 3,
  },
  changeText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
  },
});
