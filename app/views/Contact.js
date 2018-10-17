import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native'

import { Menu } from '../sections/Menu';
import {Header} from '../sections/Header'

export class Contact extends Component {
    constructor(props){
        super(props);
    }

    render (){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header navigate={navigate}/>
                <Text style={styles.text}>Contact us</Text>
                <Menu navigate={navigate}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text:{
        flex:8
    },
    texts:{
        flex:6
    }
})