import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
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

const AppWithFramework = () => (
    <Framework>
      <App/>
    </Framework>
);


render(
  <AppWithFramework/>,
  document.getElementById('talent')
);
