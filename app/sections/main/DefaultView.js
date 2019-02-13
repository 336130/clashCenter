import React, {Component} from 'react';
import {View,StyleSheet} from 'react-native';

import Header from './Header';
import Menu from './Menu';

export default class DefaultView extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuOpen:this.props.navigation.state.routeName == "HomeRT" ? true : false
        }
    }
    
    toggleMenu = () => {
        this.setState((prevState) => { return {menuOpen:this.props.navigation.state.routeName =="HomeRT" ? true : !prevState.menuOpen}});
    };

    render(){
        let contentStyle = this.state.menuOpen ? styles.contentClosed : styles.contentOpen;

        let {navigate} = this.props.navigation;

        let bc =  this.props.backgroundColor ? this.props.backgroundColor : '#ffffff';

        return(
            <View style={[styles.container,{backgroundColor:bc}]}>
                <Header navigate={navigate}/>
                <View style={contentStyle}>
                    {this.props.children}
                </View>
                <Menu navigate={navigate} navigation={this.props.navigation} menuOpen={this.state.menuOpen} menuToggled={this.toggleMenu}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    contentOpen:{
        flex:13
    },
    contentClosed:{
        flex:8
    }
})