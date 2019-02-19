import React from 'react';

import {createStackNavigator,createAppContainer} from 'react-navigation';

import {Home} from './app/views/Home';
import {About} from './app/views/About';
import {Search} from './app/views/Search';
import {Account} from './app/views/Account';
import {Clan} from './app/views/Clan';

import AccountFactory from './app/services/AccountFactory';

const Routes = createAppContainer(createStackNavigator({
  HomeRT:{
    screen:Home,
    navigationOptions:{
      header:null
    }
  },
  AboutRT:{
    screen: About,
    navigationOptions:{
      header:null
    }
  },
  SearchRT:{
    screen: Search,
    navigationOptions:{
      header:null
    }
  },
  AccountRT:{
    screen: Account,
    navigationOptions:{
      header:null
    }
  },
  ClanRT:{
    screen: Clan,
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
    //need to retrieve token from 
    AccountFactory.GetToken().then((token) => {
      AccountFactory.Token = token;
      AccountFactory.RefreshAuthToken()
    })
  }



  render() {

    return (
        <Routes />
    );
  }
}
