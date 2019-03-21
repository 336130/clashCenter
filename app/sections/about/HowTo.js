import React, {Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Image} from 'react-native';

export  class HowTo extends Component {
    constructor(props){
        super(props);
    }

    render (){
        return (
                <ScrollView>
                    <Text style={styles.title}>How to use the app.</Text>

                    <Text style={styles.header}>How to navigate</Text>
                    <Text style={styles.text}>You can use the menu available at the bottom of each page in order to navigate around the app.</Text>
                    <Text style={styles.text}>Using the back buttom will send you to the last page you were on, but will not update the data on the page for you.</Text>
                    <Image source={require('./assets/menu.png')}></Image>

                    <Text style={styles.header}>Creating an account</Text>
                    <Text style={styles.text}>You need an account to save favorites and interests. It's free and we only ask for the username and password you'd like to use to secure your account.</Text>

                    <Text style={styles.header}>How to use favorites and interests</Text>
                    <Text style={styles.text}>Once you have an account you can start saving favorites and interests. As seen in the image below, favorites are recorded by stars and interests as hearts.</Text>
                    <Text style={styles.text}>Favorites: You're allowed a list of 100 clans you would like to be able to access quickly from you account after those clans have been returned from a search.</Text>
                    <Text style={styles.text}>Interests: You're allowed 5 interests in clans for now. Interests tell our backend what clans we need to reguarly fetch data for for historical graphs.</Text>
                    <Image source={require('./assets/favorites.png')}/>
                </ScrollView>
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