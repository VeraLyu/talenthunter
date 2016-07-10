import React from 'react';
import {Component} from 'react';


export class SearchResults extends Component {
  render() {
    return (
      <div>
      {
        this.props.talents.map((talent)=>(
            <li>
                <img src={talent.avatar_url}/>
                <a href={talent.html_url}>{talent.id}</a>
            </li>
        ))
      }
      </div>
    );
  }
}

SearchResults.propTypes = {
  talents: React.PropTypes.arrayOf(React.PropTypes.object)
};
