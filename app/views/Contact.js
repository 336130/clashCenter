import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native'
import { Header } from '../sections/Header';
import { Menu } from '../sections/Menu';

export class Contact extends Component {
    constructor(props){
        super(props);
    }

    render (){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header navigate={navigate} />
                <Text style={styles.content}>Hi!</Text>
                <Menu  navigate={navigate} />
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
    },
    contentOther:{
        flex:6
    }
})