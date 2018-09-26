import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigation} from 'react-navigation';

import {Home} from './app/views/Home';
import {Contact} from './app/views/Contact'

const Routes = createStackNavigation({
  HomeRT:{
    screen:Home,
    navigationOptions:{
      header:null
    }
  },
  ContactRT:{
    screen: Contact,
    navigationOptions:{
      header:null
    }
  }
},
{
  initialRouteName: 'HomeRT'
})

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
