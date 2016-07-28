import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import moment from 'moment';
import update from 'react-addons-update';

import Multistep from '../../lib/multistep';
import {Tags} from './tag';
import DateRange from './daterange';


export class InvitationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {show: this.props.show,
      startDate: moment(),
      endDate: moment()};
    this.close = this.close.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange(date) {
    let newState = update(this.state, {startDate: {$set: date}});
    this.setState(newState);
  }

  handleEndDateChange(date) {
    let newState = update(this.state, {endDate: {$set: date}});
    this.setState(newState);
  }

  close() {
    this.setState({show: false});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.show === true) {
      this.setState({show: true});
    }
  }

  render() {
    const steps = [
      {name: 'Candidates', component: <Tags tagList={this.props.candidates}
        deleteTag={this.props.removeCandidate}/>},
      {name: 'Interview Time',
        component: <DateRange
                    startDate={this.state.startDate} endDate={this.state.endDate}
                    handleStartDate={this.handleStartDateChange}
                    handleEndDate={this.handleEndDateChange} />},
      {name: 'Job Description', component: <p/>}
    ];
    return (
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Send Invitations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Multistep showNavigation={true} steps={steps}/>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

InvitationForm.propTypes = {
  show: React.PropTypes.boolean,
  candidates: React.PropTypes.object,
  removeCandidate: React.PropTypes.function
};
