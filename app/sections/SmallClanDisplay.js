import React, {Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export class SmallClanDisplay extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let clan = this.props.clan;
        return(
            <View style={styles.container}>
                <View style={styles.paddingRight}>
                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.image}
                            source={{uri:clan.BadgeURLs.Small}}>
                        </Image>
                        <View style={styles.levelText}> 
                            <Text>{clan.ClanLevel}</Text>
                        </View>
                    </View>
                    <Text style={styles.tag}>{clan.Tag}</Text>
                </View>
                <View>
                    <Text style={styles.name}>{clan.Name}</Text>
                    <Text>Members: {clan.Members}</Text>
                    <Text>Clan Points: {clan.ClanPoints}</Text>
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
        width: 80,
    },
    image:{
        position:'absolute',
        left: 10,
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
    tag:{
        fontSize:12
    },
    name: {
        fontSize:24,
        textDecorationLine: 'underline'
    }
})