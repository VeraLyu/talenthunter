import {connect} from 'react-redux';

import LocCandidates from '../components/loccandidates';
import {ADDR_CANDIDATES_CNT} from '../helper/urlconst';


const mapStateToProps = (state) => ({
  loc: state.locCandidates.slice(0, ADDR_CANDIDATES_CNT)
});

const LocCandidatesContainer = connect(
  mapStateToProps
)(LocCandidates);

export default LocCandidatesContainer;
