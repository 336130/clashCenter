import React from 'react';
import {AsyncStorage} from 'react-native';

import DataFactory from './DataFactory';
import { Account } from '../views/Account';

export default class AccountFactory{

    static Token = "";

    static GetToken = () => {
        return AsyncStorage.getItem("authKey");
    }

    static SetToken = (key) => {
        AsyncStorage.setItem("authKey",key).then((token) => {
            AccountFactory.Token = key
        })
        .catch((error) => console.log("SetToken Error: " + error));
    }

    static IsLoggedIn = () => {
        return !!AccountFactory.Token;
    }

    static Login = (username,password) => {
        return DataFactory.getData("account/LoginUser",{username,password})
        .catch((error) => console.log(error));
    }

    static Logout = () => {
        AccountFactory.Token = "";
        AsyncStorage.removeItem("authKey");
        return DataFactory.getData("account/LogoutUser",{token:AccountFactory.Token})
            .then(() => {})
            .catch((error) => console.log(error));
    }

    static Register = (username,password) => {
        return DataFactory.getData("account/Register",{username,password})
        .catch((error) => console.log(error));
    }

    static RefreshAuthToken = () => {
        DataFactory.getData("account/Refresh",{Token:AccountFactory.Token})
        .then((response) => {
            AccountFactory.SetToken(response.Message);
        })
        .catch((error) => {
            AccountFactory.SetToken("");
            console.log(error);
        });
    }
}