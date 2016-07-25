import ResultItem from '../components/searchresult';
import {connect} from 'react-redux';

import {removeCandidate, addCandidate} from '../redux/actions/candidates';

const mapDispatchToProps = (dispatch) => ({
  addCandidate: (id) => {
    dispatch(addCandidate(id));
  },
  removeCandidate: (id) => {
    dispatch(removeCandidate(id));
  }
});


const SearchResultContainer = connect(
  null,
  mapDispatchToProps
)(ResultItem);

export default SearchResultContainer;
