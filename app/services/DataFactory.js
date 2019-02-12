import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';

import AccountFactory from './AccountFactory';

export default class DataFactory {

    static ApiEndpoint = "http://192.168.1.106/api/";

    static getData = (destination,parameters) => {
        return fetch(DataFactory.ApiEndpoint + destination,{
            method:"POST",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + AccountFactory.Token
            },
            body: JSON.stringify(parameters)
         })
        .then((response) => response.json())
    }

    static SearchForTerm = (name,warFrequency,minMembers,maxMembers,minClanPoints,minClanLevel,location) => {
         return DataFactory.getData("search/SearchForClan",{name,warFrequency,minMembers,maxMembers,minClanPoints,minClanLevel,location});        
    }

    static GetLocations = () => {
        return fetch(DataFactory.ApiEndpoint + "location/GetLocations")
        .then((response) => response.json());
    }
}