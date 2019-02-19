import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default class Menu extends Component  {
    constructor (props){
        super(props);
    };

    callParent = () => {
        if (this.props.menuToggled){
            this.props.menuToggled();
        };
    }

    render () {
        let menuOpen = this.props.menuOpen;
        return menuOpen ? (
            <View style={styles.openContainer}>
                <View style={styles.miniRow}>
                    <TouchableOpacity style={styles.miniItem} onPress={this.callParent}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniItem} onPress={this.callParent}>
                        <Text style={styles.text}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniItem} onPress={this.callParent}>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.row}>
                    <TouchableOpacity style={styles.item} onPress={() => this.props.navigate('HomeRT')}>
                        <Text style={styles.text}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => this.props.navigate('AccountRT')}>
                        <Text style={styles.text}>Account</Text>
                    </TouchableOpacity>
                </View>
            
                <View style={styles.row}>
                    <TouchableOpacity style={styles.item} onPress={() => this.props.navigate('SearchRT')}>
                        <Text style={styles.text}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => this.props.navigate('AboutRT')}>
                        <Text style={styles.text}>About Us</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ) : (
            <View style={styles.closedContainer}>
                <View style={styles.miniRowClosed}>
                    <TouchableOpacity style={styles.miniItem} onPress={this.callParent}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniItem} onPress={this.callParent}>
                        <Text style={styles.text}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniItem} onPress={this.callParent}>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    openContainer:{
        flex:6,
        backgroundColor: '#002AFF',
        borderColor:'#ffffff',
        borderTopWidth: 1
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
    },
    closedContainer:{
        flex:1,
        backgroundColor: '#002AFF',
        borderColor:'#ffffff',
        borderTopWidth: 1
    },
    miniRow:{
        flex:1,
        flexDirection: 'row',
        borderColor:'#ffffff',
        borderBottomWidth: 1
    },
    miniRowClosed:{
        flex:1,
        flexDirection: 'row',
    },
    miniItem: {
        width: '33%',
        justifyContent:'center',
        alignItems:'center'
    }
})