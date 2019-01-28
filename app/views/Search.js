import React, {Component} from 'react';
import {Dimensions,Text} from 'react-native';
import {createTabNavigator,createAppContainer} from 'react-navigation';

import DefaultView from '../sections/DefaultView';

import {SearchCriteria} from '../sections/SearchCriteria';
import {SearchResults} from '../sections/SearchResults';

//const Tabs =createAppContainer( createTabNavigator({
//    Criteria: SearchCriteria,
//    Results: SearchResults
//},{}));

export class Search extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <DefaultView navigation={this.props.navigation}>
            </DefaultView>
        )
    }
}