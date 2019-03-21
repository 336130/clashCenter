import React,{Component} from 'react';
import {View,Text,Picker,TextInput,StyleSheet} from 'react-native';

export class AdvancedSearchControls extends Component{
    constructor(props){
        super(props);
    }


    render(){
        let defaultMinClanPoints = this.props.searchCriteria.minClanPoints == 0 ? '' 
            : this.props.searchCriteria.minClanPoints.toString();

        let defaultMinClanLevel = this.props.searchCriteria.minClanLevel == 0 ? '' 
            : this.props.searchCriteria.minClanLevel.toString();

        let defaultMinMembers = this.props.searchCriteria.minMembers == 0 ? '' 
            : this.props.searchCriteria.minMembers.toString();

        let defaultMaxMembers = this.props.searchCriteria.maxMembers == 0 ? '' 
            : this.props.searchCriteria.maxMembers.toString();

        let locationOptions = [];
        if (this.props.locations){
            this.props.locations.forEach((location) => {
                locationOptions.push(<Picker.Item label={location.name} value={location.locationID} key={location.locationID} />)
            });
        }

        return (
        this.props.open ? <View style={styles.advancedControls}>
            <View style={styles.advancedControl}>
                <Text style={styles.advancedControlsOptionsLabels}>Location</Text>
                <Picker
                    selectedValue={this.props.searchCriteria.location}
                    style={styles.picker}
                    onValueChange={(location,itemIndex) => {
                        this.props.searchCriteria.location = location;
                    }}>
                    <Picker.Item label="-- Please Select --" value="0" key="0"/>
                    {locationOptions}
                </Picker>
            </View>
            <View style={styles.advancedControl}>
                <Text style={styles.advancedControlsOptionsLabels}>War Frequency:</Text>
                <Picker
                    selectedValue={this.props.searchCriteria.warFrequency}
                    style={styles.picker}
                    onValueChange={(warFrequency,itemIndex) => {
                        this.props.searchCriteria.warFrequency = warFrequency;
                    }}>
                    <Picker.Item label="-- Please Select --" value=""/>
                    <Picker.Item label="Always" value="always"/>
                    <Picker.Item label="More than once per week" value="moreThanOncePerWeek"/>
                    <Picker.Item label="Once per week" value="oncePerWeek"/>
                    <Picker.Item label="Less than once per week" value="lessThenOncePerWeek"/>
                    <Picker.Item label="Never" value="never"/>
                    <Picker.Item label="Unknown" value="unknown"/>
                </Picker>
            </View>
            <View style={styles.advancedControl}>
                <Text style={styles.advancedControlsOptionsLabels}>Minimum Clan Points</Text>
                <TextInput
                    placeholder={'0'}
                    keyboardType='numeric'
                    style={styles.memberInput}
                    underlineColorAndroid={'transparent'}
                    defaultValue={defaultMinClanPoints}
                    onChangeText={(minClanPoints)=> {
                        this.props.searchCriteria.minClanPoints = minClanPoints;
                }}></TextInput>
            </View>
            <View style={styles.advancedControl}>
                <Text style={styles.advancedControlsOptionsLabels}>Minimum Clan Level</Text>
                <TextInput
                    placeholder={'0'}
                    keyboardType='numeric'
                    style={styles.memberInput}
                    underlineColorAndroid={'transparent'}
                    defaultValue={defaultMinClanLevel}
                    onChangeText={(minClanLevel) => {
                        this.props.searchCriteria.minClanLevel = minClanLevel;
                        console
                    }}
                ></TextInput>
            </View>
            <Text>Members</Text>
            <View style={styles.advancedControl}>
                <View style={styles.advancedControl}>
                    <Text style={styles.advancedControlsOptionsLabels}>Minimum</Text>
                    <TextInput
                        placeholder={'0'}
                        style={styles.memberInput}
                        keyboardType='numeric'
                        underlineColorAndroid={'transparent'}
                        defaultValue={defaultMinMembers}
                        //need to add validation
                        onChangeText={(minMembers)=> {
                            this.props.searchCriteria.minMembers = minMembers;
                    }}></TextInput>
                </View>
                <View style={styles.advancedControl}>
                    <Text style={styles.advancedControlsOptionsLabels}>Maximum</Text>
                    <TextInput
                        placeholder={'0'}
                        style={styles.memberInput}
                        keyboardType='numeric'
                        underlineColorAndroid={'transparent'}
                        defaultValue={defaultMaxMembers}
                        //need to add validation
                        onChangeText={(maxMembers)=> {
                            this.props.searchCriteria.maxMembers = maxMembers;
                    }}></TextInput>
                </View>
            </View>
        </View> : <View></View>
        )
    }
}

const styles = StyleSheet.create({
    advancedControls:{
        height: 270
    },
    advancedControl:{
        flex:2,
        flexDirection:'row',
        borderColor: '#000000',
        borderBottomWidth:1,
        maxHeight:50
    },
    advancedControlsOptionsLabels:{
        fontSize:16,
        padding: 12,
        width:'50%'
    },
    memberInput: {
        backgroundColor: '#ffffff',
        width:'50%',
        borderRadius: 5
    },
    picker:{
        width:'50%',
        height:48,
        backgroundColor: '#ffffff'
    }
})