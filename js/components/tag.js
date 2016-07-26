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
  }
  handleDelete(event) {
    let tag = event.currentTarget.getAttribute('data-tagId');
    this.props.deleteTag(tag); // Global handling for tag
  }
  render() {
    let tagList = this.props.tagList;
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
