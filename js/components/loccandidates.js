import {Component} from 'react';
import React from 'react';


class LocCandidates extends Component {
  render() {
    return (
      <ul>
        {this.props.loc.map((loc, index)=>{
          if (index === 0) {
            return (
              <li>
                <input id={loc.id} type="radio" name="loc" value={loc.description} checked/>
                <label>{loc.description}</label>
              </li>
            );
          }
          return (
            <li>
              <input id={loc.id} type="radio" name="loc" value={loc.description}/>
              <label>{loc.description}</label>
            </li>
          );
        })}
      </ul>
    );
  }
}

LocCandidates.propTypes = {
  loc: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default LocCandidates;
