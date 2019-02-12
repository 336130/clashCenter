import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

import AccountFactory from '../../services/AccountFactory';

export class AccountDetails extends Component{
    constructor(props){
        super(props);
    }

    handleLogout = () => {
        console.log(AccountFactory.Token);
        AccountFactory.Logout().then((response) =>{
            this.props.navigation.navigate("HomeRT");
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>I'm account details</Text>
               <TouchableOpacity style={styles.logoutButton} onPress={this.handleLogout}>
                   <Text style={styles.logoutText}>Log out</Text>
               </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    logoutButton:{
        margin:'2%',
        padding: 10,
        backgroundColor: '#cccccc',
        position: 'absolute',
        bottom: 0,
        width: '96%'
    },
    logoutText:{
        fontSize: 24,
        textAlign: 'center'
    }
})