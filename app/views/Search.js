import React, {Component} from 'react';

import DefaultView from '../sections/DefaultView';

import {SearchCriteria} from '../sections/SearchCriteria';
import {SearchResults} from '../sections/SearchResults';


export class Search extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <DefaultView navigation={this.props.navigation}>
                <SearchCriteria></SearchCriteria>
            </DefaultView>
        )
    }
}