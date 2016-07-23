import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';


import {App} from './app';
import Header from './header';
import Footer from './footer';
import {Results} from './result';
import store from '../redux/store';

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

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/talent" component={Framework}>
        <IndexRoute component={App}/>
        <Route path="result" component={Results}/>
      </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('talent')
);
