import React, {Component} from 'react';
import {ActivityIndicator,View,Text} from 'react-native';

import {SmallClanDisplay} from '../SmallClanDisplay'

export class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        let searchContainer = [];

        if (this.props.data != null){
            for (var i = 0; i < 100; i++){
                let Clan = this.props.data[i];
                searchContainer.push(<SmallClanDisplay clan={Clan} key={Clan.Tag}/>);
            }
        }

        let replacementText = <View>
            <Text style={{textAlign:'center',marginTop: 30}}>Please enter a clan name to search.</Text>
        </View>;

        let displayValue = searchContainer.length ? searchContainer:replacementText;

        if (this.props.loading) {
            displayValue = <View>
                <ActivityIndicator style={{marginTop: 30}} size="large" color="#42b9f4"></ActivityIndicator>
            </View>
        }

        if (this.props.errors){
            displayValue = <Text style={{textAlign:'center',marginTop: 30,color:'#e01e14'}}>{this.props.errors}</Text>;
        }

        return(
            <View>
                {displayValue}
            </View>
        )
    }
}