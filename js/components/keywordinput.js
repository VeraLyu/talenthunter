import React from 'react';
import {Component} from 'react';

import {Tags} from './tag';


import Styles from '../../scss/keywordinput.scss';

export class KeywordInput extends Component {
  render() {
    let keys = this.props.keywords.reduce((result, cur)=>{
      result[cur] = cur;
      return result;
    }, {});
    return (
      <div className={Styles.keyword}>
        <div>
          <label htmlFor="key_word">Keywords</label>
          <input id="key_word" type="text" onKeyDown={this.props.handleInputChange}
            value={this.props.initValue}/>
        </div>
        <Tags tagList={keys} deleteTag={this.props.handleKeyDelete}/>
      </div>
      );
  }
}

KeywordInput.propTypes = {
  keywords: React.PropTypes.arrayOf(React.PropTypes.string),
  value: React.PropTypes.string,
  handleInputChange: React.PropTypes.func.isRequired,
  initValue: React.PropTypes.string,
  handleKeyDelete: React.PropTypes.function
};
