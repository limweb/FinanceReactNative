'use strict';

var React = require('react-native');
var store = require('react-native-simple-store');
var NavigationBar = require('react-native-navbar');

var {
  Navigator,
  StatusBarIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Platform,
} = React;

// Views
var AddNewView = require('./App/Views/AddNew');
var SettingsView = require('./App/Views/Settings');
var StocksView = require('./App/Views/Stocks');
var WebView = require('./App/Views/Web');

// Styles
var styles = require('./style');

Platform.OS === 'ios' ? StatusBarIOS.setStyle('light-content', false): null;

var Finance = React.createClass({
  getInitialState: function() {
    return {};
  },

  configureScene : function(route){
    switch (route.id) {
      case 'settings':
        return Navigator.SceneConfigs.FloatFromBottom;
      case 'add':
        return Navigator.SceneConfigs.FloatFromBottom;
      case 'yahoo':
        return Navigator.SceneConfigs.HorizontalSwipeJump;
      default:
        return Navigator.SceneConfigs.HorizontalSwipeJump;
      }
  },

  renderScene: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    switch (route.id) {
      case 'empty':
        //Com <View />;
      case 'stocks':
        Component = StocksView;
        navBar = null;
        break;
      case 'settings':
        Component = SettingsView;
        navBar = <NavigationBar
          style={styles.navBar}
          customPrev={<TouchableOpacity
              onPress={() => navigator.push({title: 'Add', id: 'add'})}
              style={styles.navBarLeftButton}>
              <Text style={[styles.navBarText, styles.navBarButtonText]}>
                ＋
              </Text>
            </TouchableOpacity>}
          customNext={<TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.navBarRightButton}>
              <Text style={[styles.navBarText, styles.navBarButtonText]}>
                Done
              </Text>
            </TouchableOpacity>}
          title='Settings'
          titleColor='white'/>;
        break;
      case 'add':
        Component = AddNewView;
        navBar = <NavigationBar
          style={styles.navBar}
          customPrev={<TouchableOpacity
            onPress={() => navigator.pop()}
            style={styles.navBarLeftButton}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
              Cancel
            </Text>
          </TouchableOpacity>}
          title='Add'
          titleColor='white'/>;
        navBar = null;
        break;
      case 'yahoo':
        Component = WebView;
        navBar = <NavigationBar
          style={styles.navBar}
          customPrev={<TouchableOpacity
            onPress={() => navigator.pop()}
            style={styles.navBarLeftButton}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
              Cancel
            </Text>
          </TouchableOpacity>}
          title='Yahoo'
          titleColor='white'/>;
        break;
      }

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        {navBar}
        <Component
          navigator={navigator}
          route={route} />
      </View>
    );
  },

  render: function() {
    return (
      <Navigator
        debugOverlay={false}
        style={styles.nav}
        initialRoute={{title: 'Finance', index: 0, id: 'stocks'}}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
});

module.exports = Finance;
