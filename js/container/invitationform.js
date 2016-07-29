import {InvitationForm} from '../components/invitationform';
import {connect} from 'react-redux';

import {removeCandidate} from '../redux/actions/candidates';
import {getJDs} from '../redux/actions/jds';

const mapStateToProps = (state) => {
  let candidates = state.candidates.reduce((result, candidateId)=>{
    result[candidateId] = state.talents[candidateId].login;
    return result;
  }, {});
  let jds = state.jds;
  return {candidates, jds};
};

const mapDispatchToProps = (dispatch) => ({
  removeCandidate: (id) => {
    dispatch(removeCandidate(id));
  },
  getJDs: () => {
    dispatch(getJDs());
  }
});

const InvitationFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvitationForm);

export default InvitationFormContainer;
