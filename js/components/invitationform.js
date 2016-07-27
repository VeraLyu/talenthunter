import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

import Multistep from '../../lib/multistep';
import {Tags} from './tag';

export class InvitationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {show: this.props.show};
    this.close = this.close.bind(this);
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
      {name: 'StepTwo', component: <p/>},
      {name: 'StepThree', component: <p/>}
    ];
    return (
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Send Invitations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Multistep showNavigation={true} steps={steps}/>
        </Modal.Body>
      </Modal>
    );
  }
}

InvitationForm.propTypes = {
  show: React.PropTypes.boolean,
  candidates: React.PropTypes.object,
  removeCandidate: React.PropTypes.function
};
