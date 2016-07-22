import {LocPicker} from '../components/locpicker';
import {connect} from 'react-redux';

import {addLocation, fetchLocation, chooseLocCandidate} from '../redux/actions/location';

const mapStateToProps = (state) => {
  if (state.locCandidates.candidates.length > 0) {
    return {
      firstChild: state.locCandidates.candidates[0].id,
      selection: document.getElementById(state.locCandidates.selected + '_input')
    };
  }
  return {
    firstChild: null,
    selection: null
  };
};

const mapDispatchToProps = ((dispatch) => {
  return {
    fetchLocation: (hint)=> {
      dispatch(fetchLocation(hint));
    },
    addLocation: (hint)=> {
      dispatch(addLocation(hint));
    },
    chooseLocCandidate: (id)=> {
      dispatch(chooseLocCandidate(id));
    }
  };
});


const LocPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocPicker);

export default LocPickerContainer;
