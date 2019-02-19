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
                    <Text numberOfLines={1} style={styles.name}>{member.Name}</Text>
                    <Text>{member.Tag}</Text>
                    <Text numberOfLines={1}>Rank: {member.Role}</Text>
                </View>
                <View style={styles.donationsContainer}>
                    <Text>Donations:</Text>
                    <Text style={styles.donationIndent}>Sent: {member.Donations}</Text>
                    <Text style={styles.donationIndent}>Recieved: {member.DonationsRecieved}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text>Exp: {member.ExpLevel}</Text>
                    <Text>Trophies: {member.Trophies}</Text>
                    <Text>Vs. Trophies: {member.VersusTrophies}</Text>
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
        padding: 5,
    }
})