import React, {Component} from 'react';

import DefaultView from '../sections/main/DefaultView';

import {Login} from '../sections/account/login/Login';
import {AccountDetails} from '../sections/account/AccountDetails'

import AccountFactory from '../services/AccountFactory'; 

export class Account extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let display;
        if (!AccountFactory.IsLoggedIn()) {
            display = <Login navigation={this.props.navigation} ></Login>;
        }  else {
            display = <AccountDetails navigation={this.props.navigation} ></AccountDetails>;
        }

        return (
            <DefaultView  navigation={this.props.navigation} >
            {display}
            </DefaultView>
        )
    }
}