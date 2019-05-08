import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';

import AccountFactory from './AccountFactory';

export default class DataFactory {

    static ApiEndpoint = "https://clashcenterwebapp.azurewebsites.net/api/";

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
        .then((response) => response.json());
    }

    static SearchForTerm = (name,warFrequency,minMembers,maxMembers,minClanPoints,minClanLevel,location) => {
         return DataFactory.getData("search/SearchForClan",{name,warFrequency,minMembers,maxMembers,minClanPoints,minClanLevel,location});        
    }

    static GetClan = (tag) => {
        return DataFactory.getData('clan/GetClan',{tag});
    }

    static GetLocations = () => {
        return fetch(DataFactory.ApiEndpoint + "location/GetLocations")
        .then((response) => response.json());
    }

    static AddFavorite = (tag) => {
        return DataFactory.getData("clan/AddFavorite",{tag});
    }

    static AddInterest = (tag) => {
        return DataFactory.getData("clan/AddInterest",{tag});
    }

    static RemoveFavorite = (tag) => {
        return DataFactory.getData("clan/RemoveFavorite",{tag});
    }

    static RemoveInterest = (tag) => {
        return DataFactory.getData("clan/RemoveInterest",{tag});
    }
}