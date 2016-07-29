import React, {Component} from 'react';

import {FormControl} from 'react-bootstrap';


export class JDs extends Component {
  render() {
    return (
      <FormControl componentClass="select" multiple>
        {this.props.jds.map(
          (jd, index)=>(<option value={index}>{jd.title}</option>))}
      </FormControl>);
  }
}

JDs.propTypes = {
  jds: React.PropTypes.arrayOf(React.PropTypes.object)
};
