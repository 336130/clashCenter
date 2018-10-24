import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export class Menu extends Component  {
    constructor (props){
        super(props);
        this.state = {
            menuOpen: this.props.navigation.state.routeName == "HomeRT" ? true : false
        };
    };

    toggleMenu = () => {
        this.setState((prevState) => { return {menuOpen:this.props.navigation.state.routeName =="HomeRT" ? true : !prevState.menuOpen}});
        this.callParent();
    };

    callParent = () => {
        if (this.props.parentMethod){
            this.props.parentMethod();
        };
    }


    render () {
        let menuOpen = this.state.menuOpen;
        return menuOpen ? (
            <View style={styles.openContainer}>
                <View style={styles.miniRow}>
                    <TouchableOpacity style={styles.miniItem}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniItem} onPress={this.toggleMenu}>
                        <Text style={styles.text}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniItem}>
                    </TouchableOpacity>
                </View>
            
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
        ) : (
            <View style={styles.closedContainer}>
                <View style={styles.miniRowClosed}>
                    <TouchableOpacity style={styles.miniItem}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniItem} onPress={this.toggleMenu}>
                        <Text style={styles.text}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniItem}>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    openContainer:{
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
    },
    closedContainer:{
        flex:1,
        backgroundColor: '#002AFF'
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