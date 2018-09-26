import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'

import {StackNavigator} from 'react-navigation';

export class Menu extends Component  {
    constructor (props){
        super(props);
    }

    render () {
        return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.item} >
                    <Text style={styles.text}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => this.props.navigate('ContactRT')}>
                    <Text style={styles.text}>Contact Us</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.row}>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.text}>Forum</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.text}>Products</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.row}>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.text}>Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.text}>Blog</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:6,
        backgroundColor: '#002AFF'
    },
    row:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ffffff',
        borderBottomWidth: 1
    },
    item: {
        width: '50%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color: '#ffffff',
    fontSize: 18
}
})