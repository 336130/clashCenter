import React, {Component} from 'react';
import {Text,TouchableOpacity,View,StyleSheet,TextInput} from 'react-native';

export class SearchCriteria extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    search = (searchTerm) => {
        if (true) retrue;
    }

    render(){
        let {navigate} = this.props.navigation;
        return(
            <View>
                <TextInput onChangeText={(searchTerm) => this.setState({searchTerm})}></TextInput>
                <TouchableOpacity style={styles.submitButton} onPress={() => navigate("Results",{searchTerm:this.state.searchTerm})}/>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
    },
    submitButton:{
        width: '50%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#002AFF'
    }
})