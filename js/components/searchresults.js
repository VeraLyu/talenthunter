import React from 'react';
import {Component} from 'react';
import ResultItem from './searchresult';


export class SearchResults extends Component {
  render() {
    return (
      <div>
      {
        this.props.talents.map((talent)=>(
          <ResultItem key={talent.id} {...talent}/>
        ))
      }
      </div>
    );
  }
}

SearchResults.propTypes = {
  talents: React.PropTypes.arrayOf(React.PropTypes.object)
};
