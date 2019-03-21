import React from 'react';
import {AsyncStorage} from 'react-native';

import DataFactory from './DataFactory';

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
        return fetch(DataFactory.ApiEndpoint + "token",{
            method:'POST',
            headers:{
                "content-type":"application/x-www-form-urlencoded"
            },
            body:"username=" + username + "&" +
                "password=" + password + "&" +
                "grant_type=password"
        })
        .then((response) =>  
        {
            return response.json()
        });
    }

    static Logout = () => {
        AccountFactory.Token = "";
        AsyncStorage.removeItem("authKey");
        return DataFactory.getData("account/LogoutUser",{token:AccountFactory.Token})
            .then(() => {})
            .catch((error) => console.log(error));
    }

    static Register = (username,password) => {
        return DataFactory.getData("account/Register",{username,password});
    }

    static RefreshToken = () => {
        AccountFactory.GetToken().then((response) => {
            AccountFactory.SetToken(response);
            fetch(DataFactory.ApiEndpoint + "account/refreshToken",AccountFactory.Token)
            .then((response) => response.json())
            .then(response => {
                if (response){
                    AccountFactory.Login(response.username,response.password)
                    .then((response) => AccountFactory.SetToken(response.access_token))
                }
            }).catch((error) => console.log(error));
        });
    }

    static GetUserDetails = () => {
        return DataFactory.getData("account/GetUserDetails",{})
    }
}