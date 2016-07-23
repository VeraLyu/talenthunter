import React from 'react';
import {Component} from 'react';

import SearchForm from '../container/searchform';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {hotTopic: 'c++'};
  }

  render() {
    return (
        <div>
          <SearchForm hotTopic={this.state.hotTopic}/>
        </div>
    );
  }
}

App.propTypes = {
  hotTopic: React.PropTypes.string
};
