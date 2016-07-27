import {InvitationForm} from '../components/invitationform';
import {connect} from 'react-redux';

import {removeCandidate} from '../redux/actions/candidates';

const mapStateToProps = (state) => {
  let candidates = state.candidates.reduce((result, candidateId)=>{
    result[candidateId] = state.talents[candidateId].login;
    return result;
  }, {});
  return {candidates};
};

const mapDispatchToProps = (dispatch) => ({
  removeCandidate: (id) => {
    dispatch(removeCandidate(id));
  }
});

const InvitationFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvitationForm);

export default InvitationFormContainer;
