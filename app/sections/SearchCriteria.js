import React, {Component} from 'react';
import {Text,TouchableOpacity,
    View,StyleSheet,TextInput,
    ScrollView, Picker} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import DataFactory from '../services/DataFactory';
import { SearchResults } from './SearchResults';
import { MapViewAnimated } from 'react-native-maps';

export class SearchCriteria extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchData: null,
            loading:false,
            searchedOnce:false,
            advancedOpen:false,

            //search params
            warFrequency:"",
            name:"",
            minMembers:0,
            maxMembers: 0,
            minClanPoints:0,
            minClanLevel:0
        }
    }

    submitSearch = () => { 
        this.setState({advancedOpen:false})
        DataFactory.SearchForTerm(this.state.name,
                                  this.state.warFrequency,
                                  this.state.minMembers,
                                  this.state.maxMembers,
                                  this.state.minClanPoints,
                                  this.state.minClanLevel)
        .then((response) => {
            this.setState({searchData:response})
        })
        .catch((error) => console.log(error));
    }

    toggleAdvancedSearch = () => {
        this.setState({advancedOpen:!this.state.advancedOpen})
    }


    render(){
        let advancedSearch = this.state.advancedOpen ?
        <View style={styles.advancedControls}>
            <View style={styles.advancedControl}>
                <Text style={styles.advancedControlsOptionsLabels}>War Frequency:</Text>
                <Picker
                    selectedValue={this.state.WarFrequency}
                    style={styles.warFrequencyPicker}
                    onValueChange={(WarFrequency,itemIndex) => 
                        this.setState({WarFrequency})
                    }>
                    <Picker.Item label="-- Please Select --" value=""/>
                    <Picker.Item label="Always" value="always"/>
                    <Picker.Item label="Often" value="moreThanOncePerWeek"/>
                    <Picker.Item label="Not so often" value="oncePerWeek"/>
                    <Picker.Item label="Barely" value="lessThenOncePerWeek"/>
                    <Picker.Item label="Never" value="never"/>
                    <Picker.Item label="Unknown" value="unknown"/>
                </Picker>
            </View>
            <View style={styles.advancedControl}>
                <Text style={styles.advancedControlsOptionsLabels}>Minimum Clan Points</Text>
                <TextInput
                    placeholder={'0'}
                    keyboardType='numeric'
                    style={styles.memberInput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(minClanPoints)=> this.setState({minClanPoints})}
                ></TextInput>
            </View>
            <View style={styles.advancedControl}>
                <Text style={styles.advancedControlsOptionsLabels}>Minimum Clan Level</Text>
                <TextInput
                    placeholder={'0'}
                    keyboardType='numeric'
                    style={styles.memberInput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(minClanLevel) => this.setState({minClanLevel})}
                ></TextInput>
            </View>
            <Text>Members</Text>
            <View style={styles.advancedControl}>
                <View style={styles.advancedControl}>
                    <Text style={styles.advancedControlsOptionsLabels}>Minimum</Text>
                    <TextInput
                        placeholder={'0'}
                        style={styles.memberInput}
                        keyboardType='numeric'
                        underlineColorAndroid={'transparent'}
                        //need to add validation
                        onChangeText={(minMembers)=> this.setState({minMembers})}
                    ></TextInput>
                </View>
                <View style={styles.advancedControl}>
                    <Text style={styles.advancedControlsOptionsLabels}>Maximum</Text>
                    <TextInput
                        placeholder={'0'}
                        style={styles.memberInput}
                        keyboardType='numeric'
                        underlineColorAndroid={'transparent'}
                        //need to add validation
                        onChangeText={(maxMembers)=> this.setState({maxMembers})}
                    ></TextInput>
                </View>
            </View>
        </View>
        : <View>
        </View>;

        let advancedControlIcon = this.state.advancedOpen ? 'angle-double-up' : 'angle-double-down';



        return(
            <View style={styles.container}>
                <View>
                    <TextInput 
                        style={styles.nameInput}
                        autoFocus={true}
                        placeholder={'Clan Name'}
                        placeholderTextColor={'#000000'}
                        underlineColorAndroid={'transparent'}
                        onChangeText={(Name) => this.setState({Name})}
                        onSubmitEditing={this.submitSearch}>
                    </TextInput>
                    {advancedSearch}
                    <TouchableOpacity style={styles.advancedControlButton} onPress={this.toggleAdvancedSearch}>
                        <View style={styles.advancedControlEmpty}></View>
                            <Icon name={advancedControlIcon} size={20} color="#000000"></Icon>
                            <Text style={styles.advancedControlText}>Advanced Search</Text>
                            <Icon name={advancedControlIcon} size={20} color="#000000"></Icon>
                        <View style={styles.advancedControlEmpty}>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitButton} onPress={this.submitSearch}>
                        <Text style={styles.submitButtonText}>Search!</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView>
                        <SearchResults data={this.state.searchData}/>
                    </ScrollView>
                </View>
            </View>
        ) 
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#dddddd',
    },
    submitButton:{
        width: '100%',
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#002AFF'
    },
    submitButtonText:{
        color:'#ffffff',
        fontSize:18
    },
    nameInput: {
        borderColor:'#000000',
        borderBottomWidth: 1,
        fontSize:18,
        backgroundColor: '#ffffff'
    },
    advancedControlButton:{
        backgroundColor:'#ffffff',
        width:'100%',
        flexDirection:'row',
        height: 40,
        justifyContent:'center',
        alignItems:'center',
    },
    advancedControlText:{
        textAlign:'center',
        fontSize:18,
        flex:3
    },
    advancedControlEmpty:{
        flex:1
    },
    advancedControls:{
        height: 220
    },
    advancedControl:{
        flex:2,
        flexDirection:'row',
        borderColor: '#000000',
        borderBottomWidth:1,
        maxHeight:50
    },
    advancedControlsOptionsLabels:{
        fontSize:16,
        padding: 12,
        width:'50%'
    },
    memberInput: {
        backgroundColor: '#ffffff',
        width:'50%',
        borderRadius: 5
    },
    warFrequencyPicker:{
        width:'50%',
        height:48,
        backgroundColor: '#ffffff'
    }
})