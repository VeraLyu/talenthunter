import {Component} from 'react';
import React from 'react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

import LocCandidates from '../container/loccandidates';


export class LocPicker extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(event) {
    if (event.keyCode === 13) {
      this.props.addLocation(event.target.value);
    } else if (event.keyCode === 40) {
      let child = this.props.firstChild;
      this.props.chooseLocCandidate(child);
      event.target.blur();
      document.getElementById(child).getElementsByTagName('input')[0].focus();
    }
  }

  render() {
    return (
      <div>
          <span>
            <FaMapMarker/>
            <input type="text" size="30" onKeyDown={this.handleKey}
            onChange={this.props.completeLoc}/>
          </span>
          <LocCandidates/>
      </div>
    );
  }
}

LocPicker.propTypes = {
  completeLoc: React.PropTypes.func,
  addLocation: React.PropTypes.func,
  chooseLocCandidate: React.PropTypes.func,
  firstChild: React.PropTypes.string
};
