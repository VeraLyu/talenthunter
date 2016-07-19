import {Component} from 'react';
import React from 'react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

import LocCandidates from '../container/loccandidates';


export class LocPicker extends Component {
  render() {
    return (
      <div>
          <span>
            <FaMapMarker/>
            <input type="text" onChange={this.props.completeLoc}/>
          </span>
          <LocCandidates/>
        </div>
    );
  }
}

LocPicker.propTypes = {
  completeLoc: React.PropTypes.func
};
