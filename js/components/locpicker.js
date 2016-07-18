import {Component} from 'react';
import React from 'react';

import FaMapMarker from 'react-icons/lib/fa/map-marker';


export class LocPicker extends Component {
  render() {
    return (
      <span>
        <FaMapMarker/>
        <input type="text" onChange={this.props.completeLoc}/>
      </span>
    );
  }
}

LocPicker.propTypes = {
  completeLoc: React.PropTypes.func
};
