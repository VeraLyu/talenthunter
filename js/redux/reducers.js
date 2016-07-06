import {combineReducers} from 'redux';
import {ADD_KEYWORD, REMOVE_KEYWORD} from './actions';

/*
  state shape:
  {
    keywords: ['c++', 'python']
    talents: {
      1: {
        name: Vera,
        profile_link: "http://this_is_veras_github_profile"
      },
      2: {
        name: Mic,
        profile_link: "http://this_is_mics_github_profile"
      }
    }
  }
*/

/*
function talents(state = {}, action) {
}
*/

function keywords(state = [], action) {
  switch (action.type) {
    case ADD_KEYWORD:
      if (state.includes(action.text)) {
        return state;
      }
      return [
        ...state,
        action.text
      ];
    case REMOVE_KEYWORD:
      return state.filter((keyword)=>(keyword !== action.text));
    default:
      return state;
  }
}

const talentSearchApp = combineReducers({
  keywords
});

export default talentSearchApp;
