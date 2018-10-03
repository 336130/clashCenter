import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

export class Header extends Component {
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
        let display = !this.state.isLoggedIn ? 'Login' : 'Username';
        return (
            <View style={styles.container}>
                <Text style={styles.appLogo} onPress={() => this.props.navigate('HomeRT')}>App!</Text>
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
    appLogo: {
        width: '50%',
        fontSize: 20,
        color: '#ffffff',
        padding: 5
    },
    login:{
        width: '50%',
        textAlign:'right',
        fontSize: 20,
        color: '#ffffff',
        padding: 5
    }
})