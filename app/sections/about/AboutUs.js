import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export class AboutUs extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View>
                <Text style={styles.title}>About Us</Text>
                
                <Text style={styles.header}>Who are we?</Text>
                <Text style={styles.text}>We are just a lonely university student who happened to find an API for a game we play and thought every player might benefit if we created an UI to access the game data.</Text>

                <Text style={styles.header}>Where's the data from?</Text>
                <Text style={styles.text}>From Clash of Clans ofcourse! The guys and gals over at Supercell allow us to fetch the latest data using their APIs.</Text>
                
                <Text style={styles.header}>What data do we record?</Text>
                <Text style={styles.text}>Your login credentials and your favorites/interests for this app are stored as well as data fetched from Clash of Clans.</Text>
                <Text style={styles.text}>We do not track log ins, search history or even how you navigate the app.</Text>

                <Text style={styles.header}>What do we do with your data?</Text>
                <Text style={styles.text}>Nothing. Absolutely nothing. We don't believe in making money by selling our users data.</Text>

                <Text style={styles.header}>Am I limited to one device?</Text>
                <Text style={styles.text}>Absolutely not. Sign in to as many devices as you'd like, there's no limit!</Text>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{

    },
    title:{
        fontSize:24,
        textDecorationLine:'underline',
        textAlign:'center'
    },
    header:{
        fontSize:20,
        marginTop:15
    },
    text:{
        marginTop:2
    }
})