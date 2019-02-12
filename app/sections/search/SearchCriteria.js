import React, {Component} from 'react';
import {Text,TouchableOpacity,
    View,StyleSheet,TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import DataFactory from '../../services/DataFactory';
import {AdvancedSearchControls} from './AdvancedSearchControls';

export class SearchCriteria extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchData: null,
            locationData:null,
            loading:false,
            searchedOnce:false,
            advancedOpen:false,

            //search params
            criteria:{
                name:"",
                warFrequency:"",
                location:0,
                minMembers:0,
                maxMembers: 0,
                minClanPoints:0,
                minClanLevel:0}
        }
    }

    componentDidMount() {
        DataFactory.GetLocations()
        .then((response) => {
            this.setState({locationData:response})
        })
        .catch((error) => console.log(error));
    }

    submitSearch = () => { 
        if (this.validateSearch()) {
            this.setState({advancedOpen:false,searchedOnce:true});
            this.props.loading(true);
            DataFactory.SearchForTerm(this.state.criteria.name,
                                      this.state.criteria.warFrequency,
                                      this.state.criteria.minMembers,
                                      this.state.criteria.maxMembers,
                                      this.state.criteria.minClanPoints,
                                      this.state.criteria.minClanLevel,
                                      this.state.criteria.location)
            .then((response) => {
                if (response.items){
                    this.props.searchData(response.items);
                }
                this.props.loading(false);
            })
            .catch((error) => {
                console.log(error);
                this.props.loading(false);
            });
        }
    }

    validateSearch = () => {
        let retVal = true,errorMessage = "";
        if (!this.state.advancedOpen && (!this.state.criteria.name || this.state.criteria.name.length < 3)) {
            retVal = false;
            errorMessage += "You must have atleast 3 characters when searching only by name.\r\n";
        }
        if (this.state.advancedOpen) {
            //still need to make sure atleast one value is being sent to server
            if ((!this.state.criteria.name ||
                this.state.criteria.name.length < 3) &&
                (!this.state.criteria.minClanLevel &&
                !this.state.criteria.minClanPoints &&
                !this.state.criteria.minMembers &&
                !this.state.criteria.maxMembers &&
                !this.state.criteria.location &&
                !this.state.criteria.warFrequency)){
                    retVal = false;
                    errorMessage += "Please provide either 3 characters for a name or some values for the advaced search parameters.";
            } else {
                if (this.state.criteria.minClanLevel != 0 && this.state.criteria.minClanLevel < 2){
                    retVal = false;
                    errorMessage += "Minimum Clan Level must be at least 2.\r\n";
                }
                if (this.state.criteria.minMembers != 0 && this.state.criteria.minMembers < 2){
                    retVal = false;
                    errorMessage += "Minimum Members must be at least 2.\r\n";
                }
                if (this.state.criteria.maxMembers != 0 && this.state.criteria.maxMembers > 50){
                    retVal = false;
                    errorMessage += "Maximum Members can not be above 50.\r\n";
                }
                if (this.state.criteria.maxMembers != 0 && this.state.criteria.minMembers > this.state.criteria.maxMembers){
                    retVal = false;
                    errorMessage += "Cannot have a Minimum Members value greater than the Maximum Members value.\r\n";
                }
            }
        }
        //send error messages to result page to display
        if (!retVal) {
            this.props.errors(errorMessage);
        }
        return retVal;
    }

    toggleAdvancedSearch = () => {
        this.setState({advancedOpen:!this.state.advancedOpen});
    }


    render(){
        let advancedControlIcon = this.state.advancedOpen ? 'angle-double-up' : 'angle-double-down';

        return(
            <View>
                <TextInput 
                    style={styles.nameInput}
                    autoFocus={true}
                    placeholder={'Enter Clan Name'}
                    placeholderTextColor={'#aaaaaa'}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(name) =>{ 
                        let criteria = this.state.criteria;
                        criteria.name = name;
                        this.setState(criteria);
                    }}
                    onSubmitEditing={this.submitSearch}>
                </TextInput>
                <AdvancedSearchControls open={this.state.advancedOpen} locations={this.state.locationData} searchCriteria={this.state.criteria}></AdvancedSearchControls>
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
        ) 
    }
}

const styles= StyleSheet.create({
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
        fontSize:24,
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
    }
});