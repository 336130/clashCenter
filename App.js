import React from 'react';

import {createStackNavigator,createAppContainer} from 'react-navigation';

import {Home} from './app/views/Home';
import {Contact} from './app/views/Contact';
import {Search} from './app/views/Search';
import {Account} from './app/views/Account';
import AccountFactory from './app/services/AccountFactory';

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
  },
  AccountRT:{
    screen: Account,
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
