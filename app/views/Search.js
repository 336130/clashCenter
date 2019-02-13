import React, {Component} from 'react';
import {ScrollView,Text} from 'react-native';

import DefaultView from '../sections/DefaultView';

import {SearchCriteria} from '../sections/search/SearchCriteria';
import {SearchResults} from '../sections/search/SearchResults';

export class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchData: null,
            loading: false,
            errors: "",
            change:1
        }
    }

    handleLoading = (val) => {
        this.setState({loading:val});
    }

    handleSearchData = (val) => {
        this.setState({searchData:val});
    }

    handleErrors = (val) => {
        this.setState({errors:val});
    }

    handleChange = () => {
        this.setState({change:this.state.change + 1})
    }

    render(){

        let counter = this.state.searchData ? this.state.searchData.length : false;
        let display = !counter ? <Text></Text> :
            <Text style={{textAlign:'center'}}>{this.state.searchData.length.toString()} Results.</Text>;

        return (
            <DefaultView navigation={this.props.navigation} backgroundColor="#dddddd">
                <SearchCriteria searchData={this.handleSearchData} loading={this.handleLoading} errors={this.handleErrors} change={this.state.change}/>
                {display}
                    <ScrollView>
                        <SearchResults data={this.state.searchData} loading={this.state.loading} errors={this.state.errors} callParent={this.handleChange}/>
                    </ScrollView>
            </DefaultView>
        )
    }
}