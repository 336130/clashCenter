import React, {Component} from 'react';
import {View,Text} from 'react-native';

import {createAppContainer,createMaterialTopTabNavigator} from 'react-navigation';

import {SignIn} from './SignIn'
import {Register} from './Register'

const LoginRoutes =createAppContainer(createMaterialTopTabNavigator({
    SignInRT:{
        screen:SignIn,
        navigationOptions:{
            title:'Sign in',
        }
    },
    Register: {
        screen:Register
    }
},{
    initialRouteName:'SignInRT',
    activeColor:'#000000',
    barStyle:{backgroundColor:'#dddddd'},
    swipeEnabled:true
}))

export class Login extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <LoginRoutes screenProps={this.props.navigation.navigate}/>
        )
    }
}

