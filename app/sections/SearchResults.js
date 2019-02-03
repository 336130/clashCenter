import React, {Component} from 'react';
import {Text} from 'react-native';

import DataFactory from '../services/DataFactory';

export class SearchResults extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.data);
        let displayValue = this.props.data === null ? "":this.props.data.toString();

        return(
            <Text>{displayValue}</Text>
        )
    }
}