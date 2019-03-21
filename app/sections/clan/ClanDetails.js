import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import DataFactory from '../../services/DataFactory';
import AccountFactory from '../../services/AccountFactory';
import { SmallMemberDetails } from './SmallMemberDetails';

export class ClanDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            initialClanData: this.props.clan,
            dataFetched: false,
            fetchedClan: null,
            fetchedClanHistory:null
        };
    }

    handleFavoritePress = () => {
        if (AccountFactory.IsLoggedIn) {
            if (this.props.clan.isFavorite){
                DataFactory.RemoveFavorite(this.props.clan.tag)
                .then((response) => {
                    this.getUpdatedData();
                })
            } else {
                DataFactory.AddFavorite(this.props.clan.tag)
                .then((response) => {
                    this.getUpdatedData();
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
                    this.getUpdatedData();
                })
            } else {
                DataFactory.AddInterest(this.props.clan.tag)
                .then((response) => {
                    this.getUpdatedData();
                })
            }
        } else {
            //show toaster message about needing to be logged in
        }
    }

    getUpdatedData = () => {
        DataFactory.GetClan(this.props.clan.tag)
        .then((response) => {
            this.setState({fetchedClan:response.latest,
                fetchedClanHistory:response.history,
                dataFetched:true});
        })
    }

    componentDidMount(){    
        this.getUpdatedData();
    }

    render(){
        let clan = null, members = [];
        if (this.state.dataFetched) {
            clan = this.state.fetchedClan;
            for (var i = 0; i < clan.memberList.length; i++){
                 members.push(<SmallMemberDetails member={clan.memberList[i]} key={i}></SmallMemberDetails>)
            }           
        } else {
            clan = this.props.clan;
            members = <View>
                <ActivityIndicator style={{marginTop: 30}} size="large" color="#42b9f4"></ActivityIndicator>
            </View>
        }

        let favColor = clan.isFavorite ? "#ffeb11" : "#000000";
        let intColor = clan.isInterest ? "#ffeb11" : "#000000";
        return(
            <View style={styles.container}>
                <View style={styles.detailsContainer}>
                    <View style={styles.paddingRight}>
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
                    </View>
                    <View style={styles.clanText}>
                        <Text numberOfLines={1} style={styles.name}>{clan.name}</Text>
                        <Text>Members: {clan.members}</Text>
                        <Text>Clan Points: {clan.clanPoints}</Text>
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
                <View style={styles.extendedDetailsContainer}>
                    <View>
                        <Text>Members</Text>
                    </View>
                    <ScrollView>
                        {members}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    detailsContainer:{
        height:80,
        borderWidth:1,
        borderColor: '#0066ff',
        flex: 1,
        flexDirection:'row',
        margin:5,
        padding: 10,
        backgroundColor:'#cccccc'
    },
    imageContainer:{
        height:55
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
    },
    extendedDetailsContainer:{
        flex:5
    }
})