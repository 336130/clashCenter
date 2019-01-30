import React, {Component} from 'react';

export default class DataFactory {

    ApiEndpoint = "localhost";

    static searchForTerm = (searchTerm) => {
        return searchTerm + " Results";
    }

    static fetchData = (destination,data) => {
        return fetch(this.ApiEndpoint + destination,data);
    }
}