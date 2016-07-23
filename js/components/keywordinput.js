import React from 'react';
import {Component} from 'react';


import Styles from '../../scss/keywordinput.scss';

export class KeywordInput extends Component {
  render() {
    return (
      <div className={Styles.keyword}>
        <div>
          <label htmlFor="key_word">Keywords</label>
          <input id="key_word" type="text" onKeyDown={this.props.handleInputChange}
            value={this.props.initValue}/>
        </div>
        {this.props.keywords.map(
          (keyword)=>(<button key={keyword} value={keyword}>{keyword}</button>))}
      </div>
      );
  }
}

KeywordInput.propTypes = {
  keywords: React.PropTypes.arrayOf(React.PropTypes.string),
  value: React.PropTypes.string,
  handleInputChange: React.PropTypes.func.isRequired,
  initValue: React.PropTypes.string
};
