import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import FaGroup from 'react-icons/lib/fa/group';
import FaPieChart from 'react-icons/lib/fa/pie-chart';
import FaMale from 'react-icons/lib/fa/male';
import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o';


import Style from '../../scss/namecard.scss';

/*
let myProp = {
  avatar_url: 'https://avatars.githubusercontent.com/u/6775919?v=3',
  name: 'Berkeley Mart',
  company: 'Free Code Camp',
  hireable: true,
  contributions: 15,
  followers: 249,
  email: 'my_email@gmail.com',
  html_url: 'https://github.com/BerkeleyTrue',
  public_repos: 20,
  id: "123"
};
*/

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.changeCandidates = this.changeCandidates.bind(this);
  }
  changeCandidates(event) {
    if (event.target.checked) {
      this.props.addCandidate(event.target.value);
    } else {
      this.props.removeCandidate(event.target.value);
    }
  }
  render() {
    let myClass = Style.nameCard;
    let email = null;
    if (this.props.hireable) {
      myClass = `${myClass} ${Style.hireable}`;
    }
    if (this.props.email) {
      email =
        (<div className={Style.contact}>
          <span>{this.props.email}</span>
        </div>);
    }
    return (
      <Col xs={5} className={myClass}>
        <input className={Style.check} type="checkbox"
        value={this.props.id} onChange={this.changeCandidates}/>
        <div className={Style.aside}>
          <img src={this.props.avatar_url}/>
          <a href={this.props.html_url}>{this.props.name}</a>
          <p><FaGroup size={16} color="#A2A2A2"/>{this.props.company}</p>
        </div>
        <div className={Style.information}>
          <ul >
            <li>
              <p>{this.props.contributions}</p>
              <FaPieChart size={30} color="#A2A2A2"/>
              <p className={Style.tip}>Contributions</p>
            </li>
            <li>
              <p>{this.props.followers}</p>
              <FaMale size={30} color="#A2A2A2"/>
              <p className={Style.tip}>Followers</p>
            </li>
            <li>
              <p>{this.props.public_repos}</p>
              <FaFolderOpenO size={30} color="#A2A2A2"/>
              <p className={Style.tip}>Repos</p>
            </li>
          </ul>
          <div className={Style.clearElement}/>
          {email}
          <div>{this.props.hireable}</div>
        </div>
      </Col>
    );
  }
}

ResultItem.propTypes = {
  avatar_url: React.PropTypes.string,
  html_url: React.PropTypes.string,
  id: React.PropTypes.number,
  hireable: React.PropTypes.bool,
  email: React.PropTypes.string,
  name: React.PropTypes.string,
  company: React.PropTypes.string,
  contributions: React.PropTypes.number,
  followers: React.PropTypes.number,
  public_repos: React.PropTypes.number,
  addCandidate: React.PropTypes.function,
  removeCandidate: React.PropTypes.function
};

export default ResultItem;
