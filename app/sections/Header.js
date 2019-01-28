import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }

loginPressed = () => {
    this.setState((prevState) =>  { return {isLoggedIn: !prevState.isLoggedIn}})
}

    render(){
        let display = !this.state.isLoggedIn ? 'Login' : 'ANORMAN';
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.appLogoContainer} onPress={() => this.props.navigate('HomeRT')} >
                    <Text style={styles.appLogo}>App!</Text>
                </TouchableOpacity>
                <Text style={styles.login} onPress={() => this.loginPressed()}>{display}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        paddingTop:20,
        backgroundColor: '#002AFF'
    },
    appLogoContainer: {
        width: '50%',
        padding: 5
    },
    appLogo:{
        fontSize: 20,
        color: '#ffffff',
    },
    login:{
        width: '50%',
        textAlign:'right',
        fontSize: 20,
        color: '#ffffff',
        padding: 5
    }
})