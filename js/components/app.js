import React from 'react';
import {Component} from 'react';
import SearchForm from '../container/searchform.js';
import {SearchResults} from './searchresults.js';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {hotTopic: 'c++'};
  }

  render() {
    return (
      <div>
        <SearchForm hotTopic={this.state.hotTopic}/>
        <SearchResults/>
      </div>
    );
  }
}

App.propTypes = {
  hotTopic: React.PropTypes.string
};