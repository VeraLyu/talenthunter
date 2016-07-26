import React, {Component} from 'react';
import {Nav, NavItem, Modal, Button} from 'react-bootstrap';

import Style from '../../scss/nav.scss';

class AppNav extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  render() {
    let candidatesJSX;
    let invitationJSX;
    if (this.props.candidatesCnt === 0) {
      candidatesJSX = (<NavItem eventKey={1} disabled>Candidates</NavItem>);
    } else {
      candidatesJSX = (
        <NavItem eventKey={1} onClick={this.open}>Candidates ({this.props.candidatesCnt})</NavItem>
      );
    }
    if (this.props.invitationCnt === 0) {
      invitationJSX = (<NavItem eventKey={3} disabled>Invitations</NavItem>);
    } else {
      invitationJSX = (<NavItem eventKey={3}>Invitations {this.props.invitationCnt}</NavItem>);
    }
    return (
      <Nav stacked className={Style.nav} bsStyle="pills" activeKey={2}>
          {candidatesJSX}
          <NavItem eventKey={2} title="Item" href="/talent/jd">Job Descriptions</NavItem>
          {invitationJSX}
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
      </Nav>
    );
  }
}

AppNav.propTypes = {
  candidatesCnt: React.PropTypes.number,
  invitationCnt: React.PropTypes.number
};
export default AppNav;
