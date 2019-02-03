import React, {Component} from 'react';
import {Text,TouchableOpacity,View,StyleSheet,TextInput,ScrollView} from 'react-native';

import DataFactory from '../services/DataFactory';
import { SearchResults } from './SearchResults';

export class SearchCriteria extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            searchData: ''
        }
    }

    submitSearch = () => { 
        DataFactory.SearchForTerm(this.state.searchTerm)
        .then((response) => {
            console.log(response.toString())
        })
        .catch((error) => console.log(error));
    }

    render(){
        return(
            <View>
                <TextInput 
                    style={styles.clanInput}
                    autoFocus={true}
                    placeholder={'Clan Name'}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(searchTerm) => this.setState({searchTerm})}>
                </TextInput>
                <TouchableOpacity style={styles.submitButton} onPress={this.submitSearch}>
                    <Text>Search!</Text>
                </TouchableOpacity>
                <ScrollView>
                    <SearchResults data={this.state.searchData}/>
                </ScrollView>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
    },
    submitButton:{
        width: '50%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#002AFF'
    },
    clanInput: {
        borderColor:'#000000',
        borderBottomWidth: 1
    }
})