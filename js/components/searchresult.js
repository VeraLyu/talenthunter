import React from 'react';
import {Col} from 'react-bootstrap';


import Style from '../../scss/namecard.scss';

const ResultItem = (props) => (
  <Col xs={4} className={Style.nameCard}>
    <img src={props.avatar_url}/>
    <p>{props.name}</p>
    <p>{props.company}</p>
    <p>{props.hireable}</p>
    <p>{props.contributions}</p>
    <p>{props.email}</p>
    <p>{props.followers}</p>
    <a href={props.html_url}>{props.id}</a>
  </Col>
);

ResultItem.propTypes = {
  avatar_url: React.PropTypes.string,
  html_url: React.PropTypes.string,
  id: React.PropTypes.number
};

export default ResultItem;
