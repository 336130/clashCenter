import React, {Component} from 'react';

export default class DataFactory {

    static ApiEndpoint = "http://192.168.1.99/api/";

    static getData = (destination,parameters) => {
        return fetch(DataFactory.ApiEndpoint + destination,{
            method:"POST",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(parameters)
         })
        .then((response) => response.json())
    }

    static SearchForTerm = (searchTerm) => {
         return DataFactory.getData("search/SearchForClan",{name:searchTerm});        
    }
}