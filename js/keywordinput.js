import React from 'react';
import {Component} from 'react';


export class KeywordInput extends Component {
	render() {
		return (
			<div>
				<label htmlFor="key_word">Keywords</label>
				<input id="key_word" type="text" onChange={this.props.handleInputChange} value={this.props.initValue}/>
			</div>
			);
	}
}