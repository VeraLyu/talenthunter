import React from 'react';
import {Component} from 'react';


export class KeywordInput extends Component {
	render() {
		return (
			<div>
				<label htmlFor="key_word">Keywords</label>
				{this.props.keywords.map((keyword)=>(<button value={keyword}>{keyword}</button>))}
				<input id="key_word" type="text" onKeyDown={this.props.handleInputChange} value={this.props.initValue}/>
			</div>
			);
	}
}