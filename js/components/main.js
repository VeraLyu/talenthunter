import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


import {App} from './app';
import Header from './header';
import Footer from './footer';

class Framework extends Component {
  render() {
    return (
      <div>
        <Header/>
          {this.props.children}
        <Footer/>
      </div>);
  }
}

Framework.propTypes = {
  children: React.PropTypes.object
};

const tmp = () => (
  <ul>
    <li>list 1</li>
    <li>list 2</li>
    <li>list 3</li>
  </ul>
);

render((
  <Router history={browserHistory}>
    <Route path="/talent" component={Framework}>
      <IndexRoute component={App}/>
      <Route path="my" component={tmp}/>
    </Route>
  </Router>),
  document.getElementById('talent')
);
