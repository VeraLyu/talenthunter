import {Component} from 'react';
import React from 'react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

import LocCandidates from '../container/loccandidates';

import Style from '../../scss/locpicker.scss';


export class LocPicker extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.inputVal = '';
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

  handleInput(event) {
    this.inputVal = event.target.value;
    this.props.fetchLocation(this.inputVal);
    event.preventDefault();
  }

  render() {
    if (this.props.selection !== null) {
      this.inputVal = this.props.selection.value;
    }
    return (
      <div className={Style.LocPicker}>
        <span className={Style.hintInput}>
            <FaMapMarker size={23} color="#A2A2A2"/>
            <span className={Style.rawInput}>
              <input type="text" onKeyDown={this.handleKey}
              onChange={this.handleInput}
              placeholder="Location"
              value={this.inputVal}/>
            </span>
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
  firstChild: React.PropTypes.string,
  selection: React.PropTypes.object,
  fetchLocation: React.PropTypes.func
};
