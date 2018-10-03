import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

import {StackNavigator} from 'react-navigation';

import {Header} from '../sections/Header';
import {Menu} from '../sections/Menu';

export class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header navigate={navigate}/>
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