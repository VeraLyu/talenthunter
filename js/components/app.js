import React from 'react';
import {Component} from 'react';
import {SearchForm} from './searchform.js'
import {SearchResults} from './searchresults.js'


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {hotTopic: "c++"};
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }
    inputStateChange() {

    }
    render () {
        return (
            <div>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit} hotTopic={this.state.hotTopic}></SearchForm>
                <SearchResults></SearchResults>
            </div>
        );
    }
}