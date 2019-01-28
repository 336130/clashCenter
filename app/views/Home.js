import React, {Component} from 'react';
import {Text} from 'react-native';

import DefaultView from '../sections/DefaultView';

export  class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <DefaultView navigation={this.props.navigation} >
                <Text>Home Content</Text>
            </DefaultView>
        )
    }
}