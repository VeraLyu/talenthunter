import React from 'react';
import {Component} from 'react';

import SearchForm from '../container/searchform';
import SearchResults from '../container/searchresults';
import Header from './header';
import Footer from './footer';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {hotTopic: 'c++'};
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchForm hotTopic={this.state.hotTopic}/>
        <SearchResults/>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  hotTopic: React.PropTypes.string
};
