import {LocPicker} from '../components/locpicker';
import {connect} from 'react-redux';

import {addLocation, fetchLocation, chooseLocCandidate} from '../redux/actions/location';

const mapStateToProps = (state) => {
  if (state.locCandidates.candidates.length > 0) {
    return {
      firstChild: state.locCandidates.candidates[0].id
    };
  }
  return {
    firstChild: null
  };
};

const mapDispatchToProps = ((dispatch) => {
  return {
    completeLoc: (event)=> {
      dispatch(fetchLocation(event.target.value));
      event.preventDefault();
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
