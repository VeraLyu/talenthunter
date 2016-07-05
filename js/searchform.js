import React from 'react';
import {Component} from 'react';
import {KeywordInput} from './keywordinput.js';


export class SearchForm extends Component {
    render() {
        {/*
                    return (
            <form>
                <KeywordInput></KeywordInput>
                <LocationSelector></LocationSelector>
                <PlatformSelector></PlatformSelector>
                <YearSelector></YearSelector>
                <input type="submit">Search</input>
            </form>
            */
        }
        return (
            <form onSubmit={this.props.handleFormSubmit}>
                <KeywordInput handleInputChange={this.props.handleInputChange} initValue={this.props.hotTopic}/>
                <input type="submit" value="Search"></input>
            </form>
        );
    }
}