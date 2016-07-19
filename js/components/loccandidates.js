import {Component} from 'react';
import React from 'react';


class LocCandidates extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
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

  render() {
    return (
      <ul>
        {this.props.loc.map((loc)=>(
            <li ref={(ref)=>{
              if (loc.id === this.props.selected) {
                this.selectItem = ref;
              }}}
              id={loc.id}>
              <input type="radio" name="loc"
                value={loc.description} checked={loc.id === this.props.selected}
                onKeyDown={this.handleSelectChange}/>
              <label>{loc.description}</label>
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
