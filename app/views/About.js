import React, {Component} from 'react';

import {createAppContainer,createMaterialTopTabNavigator} from 'react-navigation';

import DefaultView from '../sections/main/DefaultView';
import {HowTo} from '../sections/about/HowTo';
import {Contact} from '../sections/about/Contact';
import {AboutUs} from '../sections/about/AboutUs';

const Tabs = createAppContainer(createMaterialTopTabNavigator({  
    HowToRT:{
        screen: HowTo,
        navigationOptions:{
            title:"How To"
        }
    },
    AboutUsRT:{
        screen:AboutUs,
        navigationOptions:{
            title:"About Us"
        }
    },
    ContactRT:{
        screen:Contact,
        navigationOptions:{
            title:"Contact"
        }
    }
}))

export class About extends Component {
    constructor(props){
        super(props);
    }

    render (){
        return (
            <DefaultView navigation={this.props.navigation}>
                <Tabs screenProps={this.props.navigation.navigate}></Tabs>
            </DefaultView>
        )
    }
}