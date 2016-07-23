import React from 'react';
import {Component} from 'react';
import {Provider} from 'react-redux';

import SearchForm from '../container/searchform';

import store from '../redux/store';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {hotTopic: 'c++'};
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <SearchForm hotTopic={this.state.hotTopic}/>
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  hotTopic: React.PropTypes.string
};
