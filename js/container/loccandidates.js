import {connect} from 'react-redux';

import LocCandidates from '../components/loccandidates';
import {ADDR_CANDIDATES_CNT} from '../helper/urlconst';

import {chooseLocCandidate} from '../redux/actions/location';


const mapStateToProps = (state) => ({
  loc: state.locCandidates.candidates.slice(0, ADDR_CANDIDATES_CNT),
  selected: state.locCandidates.selected
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSelectChange: function (item) {
    dispatch(chooseLocCandidate(item.id));
    item.querySelector('input').focus();
  }
});

const LocCandidatesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocCandidates);

export default LocCandidatesContainer;
