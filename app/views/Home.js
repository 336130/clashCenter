import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

import {Header} from '../sections/Header';
import {Menu} from '../sections/Menu'

import {StackNavigator} from 'react-navigation';

export class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header/>
                <Text style={styles.content}>content</Text>
                <Menu navigate = {navigate}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:8
    }
})