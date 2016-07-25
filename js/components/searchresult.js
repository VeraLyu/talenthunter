import React from 'react';
import {Col} from 'react-bootstrap';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaGroup from 'react-icons/lib/fa/group';
import FaPieChart from 'react-icons/lib/fa/pie-chart';
import FaMale from 'react-icons/lib/fa/male';
import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o';


import Style from '../../scss/namecard.scss';

let myProp = {
  avatar_url: 'https://avatars.githubusercontent.com/u/6775919?v=3',
  name: 'Berkeley Mart',
  company: 'Free Code Camp',
  hireable: true,
  contributions: 15,
  followers: 249,
  email: 'my_email@gmail.com',
  html_url: 'https://github.com/BerkeleyTrue',
  public_repos: 20
};


const ResultItem = (props) => {
  let myClass = Style.nameCard;
  if (myProp.hireable) {
    myClass = `${myClass} ${Style.hireable}`;
  }
  return (
    <Col xs={5} className={myClass}>
      <div className={Style.aside}>
        <img src={myProp.avatar_url}/>
        <a href={myProp.html_url}>{myProp.name}</a>
        <p><FaGroup size={16} color="#A2A2A2"/>{myProp.company}</p>
      </div>
      <div className={Style.information}>
        <ul >
          <li>
            <p>{myProp.contributions}</p>
            <FaPieChart size={30} color="#A2A2A2"/>
            <p className={Style.tip}>Contributions</p>
          </li>
          <li>
            <p>{myProp.followers}</p>
            <FaMale size={30} color="#A2A2A2"/>
            <p className={Style.tip}>Followers</p>
          </li>
          <li>
            <p>{myProp.public_repos}</p>
            <FaFolderOpenO size={30} color="#A2A2A2"/>
            <p className={Style.tip}>Repos</p>
          </li>
        </ul>
        <div className={Style.clearElement}/>
        <div className={Style.contact}>
          <FaEnvelope size={16} color="#A2A2A2"/>
          <span>{myProp.email}</span>
        </div>
        <div>{myProp.hireable}</div>
      </div>
    </Col>
    );
};
/*
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
*/
ResultItem.propTypes = {
  avatar_url: React.PropTypes.string,
  html_url: React.PropTypes.string,
  id: React.PropTypes.number
};

export default ResultItem;
