import React, {Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import DataFactory from '../../services/DataFactory';
import AccountFactory from '../../services/AccountFactory';

export class SmallClanDisplay extends Component {
    constructor(props){
        super(props);
    }

    handleFavoritePress = () => {
        if (AccountFactory.IsLoggedIn) {
            if (this.props.clan.isFavorite){
                DataFactory.RemoveFavorite(this.props.clan.tag)
                .then((response) => {
                    if (response) {
                        this.props.callParent();
                    }
                })
            } else {
                DataFactory.AddFavorite(this.props.clan.tag)
                .then((response) => {
                    if (response) {
                        this.props.callParent();
                    }
                })
            }
        } else {
            //show toaster message about needing to be logged in
        }
    }

    handleInterestPress = () => {
        if (AccountFactory.IsLoggedIn){
            if (this.props.clan.isInterest){
                DataFactory.RemoveInterest(this.props.clan.tag)
                .then((response) => {
                    if (response) {
                        this.props.callParent();
                    }
                })
            } else {
                DataFactory.AddInterest(this.props.clan.tag)
                .then((response) => {
                    if (response) {
                        this.props.callParent();
                    }
                })
            }
        } else {
            //show toaster message about needing to be logged in
        }
    }

    handleClanPress = () => {
        this.props.navigation.navigate("ClanRT",{clanTag:this.props.clan});
    }

    render(){
        let clan = this.props.clan;

        let favColor = this.props.clan.IsFavorite ? "#ffeb11" : "#000000";
        let intColor = this.props.clan.IsInterest ? "#ffeb11" : "#000000";
        return(
            <View style={styles.container}>
                <View style={styles.paddingRight}>
                    <TouchableOpacity onPress={this.handleClanPress}>
                        <View style={styles.imageContainer}>
                            <Image 
                                style={styles.image}
                                source={{uri:clan.badgeURLs.small}}>
                            </Image>
                            <View style={styles.levelText}> 
                                <Text>{clan.clanLevel}</Text>
                            </View>
                        </View>
                        <Text style={styles.tag}>{clan.tag}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.clanText}>
                    <TouchableOpacity onPress={this.handleClanPress}>
                        <Text numberOfLines={1} style={styles.name}>{clan.name}</Text>
                        <Text>Members: {clan.members}</Text>
                        <Text>Clan Points: {clan.clanPoints}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.favIcons}>
                    <TouchableOpacity onPress={this.handleFavoritePress}>
                        <Icon style={styles.favIcon} name={"star"} size={40} color={favColor}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleInterestPress}>
                        <Icon style={styles.favIcon} name={"heart"} size={40} color={intColor}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:80,
        borderWidth:1,
        borderColor: '#0066ff',
        flex: 1,
        flexDirection:'row'
    },
    imageContainer:{
        height:55,
    },
    image:{
        position:'absolute',
        left: 5,
        width:50,
        height:50
    },
    levelText:{
        position:'absolute',
        minWidth: 20,
        bottom: 5,
        right: 10,
        borderWidth:1,
        borderColor: '#000000',
        borderRadius: 20,
        backgroundColor: '#ffd700',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paddingRight:{
        paddingRight: 5
    },
    clanText:{
        flex:2
    },
    tag:{
        fontSize:12
    },
    name: {
        fontSize:24,
        textDecorationLine: 'underline'
    },
    favIcons:{
        flex:2,
        flexDirection:'row'
    },
    favIcon:{
        padding:20
    }
})