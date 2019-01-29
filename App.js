import React from 'react';

import {createStackNavigator,createAppContainer} from 'react-navigation';

import {Home} from './app/views/Home';
import {Contact} from './app/views/Contact';
import {Search} from './app/views/Search';

const Routes = createAppContainer(createStackNavigator({
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
  },
  SearchRT:{
    screen: Search,
    navigationOptions:{
      header:null
    }
  }
},
{
  initialRouteName: 'HomeRT'
}));

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <Routes />
    );
  }
}
