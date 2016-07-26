import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import FaClose from 'react-icons/lib/fa/close';

import Style from '../../scss/tag.scss';

/*
  tag format:
  attributes can be anything you want
  {
      tag-id-mark: "Mark Twain",
      tag-id-bob: "Bob Dylan"
  }
*/
export class Tags extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {tagList: this.props.tagList};
  }
  handleDelete(event) {
    let tag = event.target.getAttribute('data-tagId');
    delete this.state.tagList[tag];
    this.props.deleteTag(tag); // Global handling for tag
    this.setState(this.state); // local representation correction
  }
  render() {
    let tagList = this.state.tagList;
    return (
      <div className={Style.tag}>
      {
        Object.keys(tagList).map((tagId) => (
          <Button bsStyle='info' onClick={this.handleDelete} data-tagId={tagId}>
            {tagList[tagId]}
            <FaClose size={16} color='#A2A2A2'/>
          </Button>))
      }
      </div>
    );
  }
}

Tags.propTypes = {
  tagList: React.PropTypes.object,
  deleteTag: React.PropTypes.function
};
