import AppNav from '../components/nav';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  candidatesCnt: state.candidates.length,
  invitationCnt: 0
});


const NavContainer = connect(
  mapStateToProps,
  null
)(AppNav);

export default NavContainer;
