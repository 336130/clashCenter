import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.appLogoContainer} onPress={() => this.props.navigate('HomeRT')} >
                    <Text style={styles.appLogo}>ClashCenter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginContainer} onPress={() => this.props.navigate("AccountRT")}>
                    <Text style={styles.login}>Account</Text>
                </TouchableOpacity>
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
        padding: 7
    },
    appLogo:{
        fontSize: 20,
        color: '#ffffff',
    },
    loginContainer:{
        width: '50%',
        padding: 5
    },
    login:{
        textAlign:'right',
        fontSize: 20,
        color: '#ffffff',
        padding: 5
    }
})