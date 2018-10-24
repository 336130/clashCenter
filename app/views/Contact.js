import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native'

import {Header} from '../sections/Header';
import { Menu } from '../sections/Menu';

export class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    menuChange = () => {
        this.setState((prevState) => {return {menuOpen: !prevState.menuOpen}})
    }

    render (){
        let menuStyle = this.state.menuOpen ? styles.menuOpenContent : styles.menuClosedContent;
        
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header navigate={navigate}/>
                <Text style={menuStyle}>Contact Us</Text>
                <Menu navigate={navigate} navigation={this.props.navigation} parentMethod={this.menuChange}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    menuOpenContent:{
        flex:8
    },
    menuClosedContent:{
        flex:13
    }
})