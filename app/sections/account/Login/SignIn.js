import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

import AccountFactory from '../../../services/AccountFactory';

export class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            errors:"",
            username:"",
            password:""
        }
    };

    handleLogin = () => {
        AccountFactory.Login(this.state.username,this.state.password)
        .then((response) => {
            if (!response.Error){
                AccountFactory.SetToken(response.Message);
                this.props.screenProps("HomeRT");
            } else {
                this.setState({errors:response.Errors});
            }
    })
    }

    render(){
        let errors = "";

        return(
            <View>
                <View style={styles.loginContainer}>
                    <Text style={styles.loginMessageHeader}>Welcome Back!</Text>
                    <Text style={styles.loginMessageText}>Or is it nice to see you? If so please use the register tab.</Text>
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
                        onSubmitEditing={this.handleLogin}
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={this.handleLogin}>
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