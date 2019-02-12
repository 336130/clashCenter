import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

import AccountFactory from '../../../services/AccountFactory';

export class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            errors:""
        }
    };

    handleRegistration = () => {
        AccountFactory.Register(this.state.username,this.state.password).then((response) => {
            console.log(response);
            if (response.Error){
                this.setState(({errors:this.state.errors + response.Errors}))
            } else {
                AccountFactory.SetToken(response.Message);
                this.props.navigation.navigate("HomeRT");
            }
        })
    }

    render(){
        return(
            <View>
                <View style={styles.loginContainer}>
                    <Text style={styles.loginMessageHeader}>Come, get the edge!</Text>
                    <Text style={styles.loginMessageText}>Register for free now to get 100 favorites and 5 interests!</Text>
                </View>
                <View style={styles.loginContainer}>
                    <TextInput
                        dafeultValue={this.state.username}
                        style={styles.loginCredentials} 
                        placeholder={"Username"}
                        placeholderTextColor={"#000000"}
                        underlineColorAndroid={'transparent'}
                        autoFocus={true}
                        onChangeText={(username) => this.setState({username})}
                    ></TextInput>
                </View>
                <View style={styles.loginContainer}>
                    <TextInput
                        dafeultValue={this.state.password}
                        style={styles.loginCredentials} 
                        placeholder={"Password"}
                        placeholderTextColor={"#000000"}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true} 
                        onChangeText={(password) => this.setState({password})}
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={this.handleRegistration}>
                    <Text style={styles.loginButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer:{
        margin: 5,
        padding: 10,
        backgroundColor:'#eeeeee',
        borderWidth:1,
        borderColor:'#000000',
        borderRadius:5
    },
    loginMessageHeader:{
        fontSize:30,
        textAlign:'center',
        textDecorationLine: 'underline'
    },
    loginMessageText:{
        fontSize:18,
        textAlign:'center'
    },
    loginCredentials:{
        backgroundColor:'#ffffff',
        margin: 2,
        padding:5
    },
    loginButton:{
        margin: 5,
        padding: 20,
        backgroundColor: '#002AFF',
    },
    loginButtonText:{
        color:'#ffffff',
        fontSize: 22,
        textAlign:'center'
    }
})