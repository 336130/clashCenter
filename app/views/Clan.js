import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import DefaultView from '../sections/main/DefaultView';
import { ClanDetails } from '../sections/clan/ClanDetails';

export class Clan extends Component{
    constructor(props){
        super(props);
        this.state=this.props.navigation.getParam('clanTag',{});
    }

    render(){
        let clan = this.state;
        return(
            <DefaultView navigation={this.props.navigation}>
                <ClanDetails clan={this.state}></ClanDetails>
            </DefaultView>
        )
    }
}