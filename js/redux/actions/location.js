import {getGGLocationURL} from '../../helper/param';

export const ADD_LOC_CANDIDATES = 'ADD_LOC_CANDIDATES';
export const SELECT_CANDIDATE = 'SELECT_CANDIDATE';


export function addLocationCandidate(locations) {
  return {
    type: ADD_LOC_CANDIDATES,
    candidates: locations
  };
}

export function fetchLocation(locHint) {
  return function (dispatch) {
    let url = getGGLocationURL(locHint);
    fetch(url).then(
        (result)=>(result.json())
      ).then(
        (locations)=>{
          dispatch(addLocationCandidate(locations.predictions));
        }
      );
  };
}

export function addLocation() {
  return null;
}

export function chooseLocCandidate(index) {
  return {
    type: SELECT_CANDIDATE,
    index
  };
}
