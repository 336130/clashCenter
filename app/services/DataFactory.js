import React, {Component} from 'react';

export default class DataFactory {

    static ApiEndpoint = "http://192.168.1.106/api/";

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

    static SearchForTerm = (name,warFrequency,minMembers,maxMembers,minClanPoints,minClanLevel) => {
         return DataFactory.getData("search/SearchForClan",{name,warFrequency,minMembers,maxMembers,minClanPoints,minClanLevel});        
    }
}