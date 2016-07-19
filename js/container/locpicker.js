import {LocPicker} from '../components/locpicker';
import {connect} from 'react-redux';

import {addLocation, fetchLocation} from '../redux/actions/location';


const mapDispatchToProps = ((dispatch) => {
  return {
    completeLoc: (event)=> {
      if (event.keyCode === 13) {
        dispatch(addLocation(event.target.value));
      } else {
        dispatch(fetchLocation(event.target.value));
      }
      event.preventDefault();
    }
  };
});


const LocPickerContainer = connect(
  null,
  mapDispatchToProps
)(LocPicker);

export default LocPickerContainer;
