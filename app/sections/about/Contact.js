import React, {Component} from 'react';
import {Text,View,StyleSheet,Picker,TextInput,TouchableOpacity} from 'react-native';

export  class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            contactType:''
        };
    }

    render (){
        return (
                <View>
                    <Text style={styles.title}>Need to get in contact?</Text>
                    <Text style={styles.text}>Use the dropdown below to choose an area you'd like to talk about and fill in the text area to let us know specifics.</Text>

                    <Picker
                        selectedValue={this.state.contactType}
                        style={styles.picker}
                        onValueChange={(contactType,itemIndex) => {
                            this.setState({contactType});
                    }}>
                        <Picker.Item label="-- Please Select --" value=""/>
                        <Picker.Item label="Account" value="account"/>
                        <Picker.Item label="Search" value="search"/>
                        <Picker.Item label="General" value="search"/>
                    </Picker>

                    <TextInput style={styles.textInput} placeholder={'Your message here'} multiline={true} numberOfLines={12}></TextInput>
                    <TouchableOpacity style={styles.submitButton} onPress={() => this.props.screenProps("HomeRT")}>
                        <Text style={styles.submitButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}



const styles=StyleSheet.create({
    container:{

    },
    title:{
        fontSize:24,
        textDecorationLine:'underline',
        textAlign:'center'
    },
    header:{
        fontSize:20,
        marginTop:15
    },
    text:{
        marginTop:2
    },
    textInput:{
        margin:10,
        borderWidth:1,
        borderColor:'#000000'
    },
    submitButton:{
        width: '100%',
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#002AFF'
    },
    submitButtonText:{
        color:'#ffffff',
        fontSize:18
    }
})