import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';

import AccountFactory from '../../services/AccountFactory';

import {SmallClanDisplay} from '../clan/SmallClanDisplay';

export class AccountDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            accountInfo:null
        }
    }

    componentDidMount =() => {
        AccountFactory.GetUserDetails().then((response) => {
            this.setState({accountInfo:response})
        });
    }

    handleLogout = () => {
        AccountFactory.Logout().then((response) =>{
            this.props.navigation.navigate("HomeRT");
        })
    }

    handleFavoriteChange = () => {
        AccountFactory.GetUserDetails().then((response) => {
            this.setState({accountInfo:response})
        });
    }

    render(){
        let favoritesContainer = [];
        if (this.state.accountInfo){
            if (this.state.accountInfo.Favorites){
                for (var i = 0; i <  this.state.accountInfo.Favorites.length; i++){
                    let Clan = this.state.accountInfo.Favorites[i];
                    favoritesContainer.push(<SmallClanDisplay navigation={this.props.navigation} clan={Clan} key={Clan.Tag} callParent={this.handleFavoriteChange}/>);
                }
            }
        }
        let name = this.state.accountInfo ? this.state.accountInfo.Username : "";
        let id = this.state.accountInfo ? this.state.accountInfo.UserID : "";
        let favCount = this.state.accountInfo ? this.state.accountInfo.Favorites.length : 0;
        let intCount = this.state.accountInfo ? this.state.accountInfo.Favorites.filter((fav)=> fav.IsInterest).length:0;

        return(
            <View style={styles.container}>
                <View style={styles.accountDetails}>
                    <Text style={styles.accountName}>Logged in as: {name}</Text>
                    <Text style={styles.accountID}>(User ID: {id})</Text>
                    <Text/>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.favInfo}>Favorites: {favCount}/100</Text>
                        <Text style={styles.favInfo}>Interests: {intCount}/5</Text>
                    </View>
                </View>
                <Text style={styles.favouritesText}>Your favorites</Text>
                <ScrollView>
                    {favoritesContainer}
                </ScrollView>
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
    },
    accountDetails:{
        margin:5,
        padding:10,
        backgroundColor: '#dddddd',
        borderRadius:5
    },
    accountName:{
        fontSize:20,
        textAlign:'center'
    },
    accountID:{
        fontSize:14,
        textAlign:'center'
    },
    favouritesText:{
        fontSize:20,
        textAlign:'center'
    },
    favInfo: {
        textAlign:'center',
        flex:1
    }
})