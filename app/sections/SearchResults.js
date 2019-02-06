import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import {SmallClanDisplay} from './SmallClanDisplay'

export class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        let searchContainer = [];

        if (this.props.data != null){
            if (this.props.data.items != null){
                this.props.data.items.forEach(Clan => {
                    searchContainer.push(<SmallClanDisplay clan={Clan} key={Clan.Tag}/>);
                });
            }
        }

        let replacementText = <View>
            <Text style={{textAlign:'center',marginTop: 30}}>Please enter a clan name to search.</Text>
        </View>;

        let displayValue = searchContainer.length ? searchContainer:replacementText;

        return(
            <View>
                {displayValue}
            </View>
        )
    }
}