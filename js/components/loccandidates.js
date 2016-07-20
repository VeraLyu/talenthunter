import {Component} from 'react';
import React from 'react';

import Styles from '../../scss/loccandidates.scss';


class LocCandidates extends Component {
  constructor(props) {
    super(props);
    this.handleKeySelect = this.handleKeySelect.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  handleKeySelect(event) {
    let next;
    if (event.keyCode === 38) {
      next = this.selectItem.previousSibling;
    } else if (event.keyCode === 40) {
      next = this.selectItem.nextSibling;
    }
    next = next ? next : this.selectItem;
    this.props.dispatchSelectChange(next);
    event.preventDefault();
    event.stopPropagation();
  }

  handleMouseClick(event) {
    let next = event.target.parentElement;
    this.props.dispatchSelectChange(next);
    // NOTE: should not call event.preventDefault();
    // or the check toggle will be disabled
    event.stopPropagation();
  }

  render() {
    return (
      <ul className={`${Styles.LocCandidates}`}>
        {this.props.loc.map((loc)=>(
            <li ref={(ref)=>{
              if (loc.id === this.props.selected) {
                this.selectItem = ref;
              }}}
              id={loc.id}>
              <input type="radio" name="loc"
                value={loc.description} checked={loc.id === this.props.selected}
                onKeyDown={this.handleKeySelect}
                onChange={this.handleMouseClick}
                id={`${loc.id}_input`}
                />
              <label htmlFor={`${loc.id}_input`}>{loc.description}</label>
            </li>
          )
        )}
      </ul>
    );
  }
}

LocCandidates.propTypes = {
  loc: React.PropTypes.arrayOf(React.PropTypes.object),
  selected: React.PropTypes.string,
  dispatchSelectChange: React.PropTypes.func
};

export default LocCandidates;
