import React from 'react';
import {Component} from 'react';
import SearchForm from '../container/searchform';
import SearchResults from '../container/searchresults';


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
