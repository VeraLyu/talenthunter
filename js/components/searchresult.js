import React from 'react';


const ResultItem = (props) => (
  <li>
    <img src={props.avatar_url}/>
    <a href={props.html_url}>{props.id}</a>
  </li>
);

ResultItem.propTypes = {
  avatar_url: React.PropTypes.string,
  html_url: React.PropTypes.string,
  id: React.PropTypes.number
};

export default ResultItem;
