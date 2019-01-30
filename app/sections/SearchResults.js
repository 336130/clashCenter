import React, {Component} from 'react';
import {Text} from 'react-native';

import DataFactory from '../services/DataFactory';

export class SearchResults extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {navigation} = this.props;
        const searchTerm = navigation.getParam('searchTerm','')
        let displayTerm = searchTerm ? DataFactory.searchForTerm(searchTerm) : "No Results";


        return(
            <Text>{displayTerm}</Text>
        )
    }
}