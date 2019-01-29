import React, {Component} from 'react';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';

import DefaultView from '../sections/DefaultView';

import {SearchCriteria} from '../sections/SearchCriteria';
import {SearchResults} from '../sections/SearchResults';

const Tabs =createAppContainer( createMaterialTopTabNavigator({
    Criteria: {
        screen:SearchCriteria,
        navigationOptions:{
          header:null
        }
    },
    Results: {
        screen:SearchResults,
        navigationOptions:{
          header:null
        }
    }
},
{
  initialRouteName: 'Criteria'
}));

export class Search extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <DefaultView navigation={this.props.navigation}>
                <Tabs/>
            </DefaultView>
        )
    }
}