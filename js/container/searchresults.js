import {SearchResults} from '../components/searchresults';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  // only repo talent map change needs to trigger this function
  // all other changes should not
  let repoArr = [];
  state.keywords.reduce(
    (prevKey, currentKey)=>{
      if (currentKey in state.keyrepomap) {
        repoArr = repoArr.concat(state.keyrepomap[currentKey]);
      }
    }, ''
  );
  let talentsArr = [];
  repoArr.reduce(
    (prevKey, currentKey)=>{
      if (currentKey in state.repotalentmap) {
        talentsArr = talentsArr.concat(state.repotalentmap[currentKey]);
      }
    }, ''
  );
  return {
    talents: talentsArr.map((key)=>(state.talents[key]))
  };
};

const SearchResultsContainer = connect(mapStateToProps)(SearchResults);

export default SearchResultsContainer;
