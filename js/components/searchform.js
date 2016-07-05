import React from 'react';
import {Component} from 'react';
import KeywordInput from '../container/keywordinput.js';


export class SearchForm extends Component {
    render() {
        {/*
                    return (
            <form onSubmit={this.props.handleFormSubmit}>
                <KeywordInput></KeywordInput>
                <LocationSelector></LocationSelector>
                <PlatformSelector></PlatformSelector>
                <YearSelector></YearSelector>
                <input type="submit">Search</input>
            </form>
            */
        }
        return (
            <form>
                <KeywordInput/>
                <input type="submit" value="Search"></input>
            </form>
        );
    }
}