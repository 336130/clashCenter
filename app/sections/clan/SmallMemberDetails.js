import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export class SmallMemberDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let member = this.props.member;
        return(
            <View style={styles.container}>
                <View style={styles.nameContainer}>
                    <Text numberOfLines={1} style={styles.name}>{member.name}</Text>
                    <Text>{member.tag}</Text>
                    <Text numberOfLines={1}>Rank: {member.role}</Text>
                </View>
                <View style={styles.donationsContainer}>
                    <Text>Donations:</Text>
                    <Text style={styles.donationIndent}>Sent: {member.donations}</Text>
                    <Text style={styles.donationIndent}>Recieved: {member.donationsRecieved}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text>Exp: {member.expLevel}</Text>
                    <Text>Trophies: {member.trophies}</Text>
                    <Text>Vs. Trophies: {member.versusTrophies}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:80,
        borderWidth:1,
        borderColor: '#000000',
        padding: 5,
        margin:5,
        backgroundColor:'#cccccc',
        flexDirection:'row'
    },
    nameContainer:{
        flex:1,
        borderRightWidth:1,
        borderRightColor:'#000000'
    },
    name:{
        fontSize:20,
        textDecorationLine: 'underline'
    },
    donationsContainer:{
        flex:1,
        padding: 5,
        borderRightWidth:1,
        borderRightColor:'#000000'
    },
    donationIndent:{
        paddingLeft:10
    },
    detailsContainer:{
        flex:1,
    }
})