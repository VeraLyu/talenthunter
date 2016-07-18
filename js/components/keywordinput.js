import React from 'react';
import {Component} from 'react';


export class KeywordInput extends Component {
  render() {
    return (
      <span>
        <label htmlFor="key_word">Keywords</label>
        {this.props.keywords.map(
          (keyword)=>(<button value={keyword}>{keyword}</button>))}
        <input id="key_word" type="text" onKeyDown={this.props.handleInputChange}
          value={this.props.initValue}/>
      </span>
      );
  }
}

KeywordInput.propTypes = {
  keywords: React.PropTypes.arrayOf(React.PropTypes.string),
  value: React.PropTypes.string,
  onKeyDown: React.PropTypes.func.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  initValue: React.PropTypes.string
};
