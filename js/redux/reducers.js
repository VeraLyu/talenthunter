import {combineReducers} from 'redux';
import {ADD_KEYWORD, REMOVE_KEYWORD} from './actions/keywords';
import {ADD_REPO, ADD_REPO_KEY_MAP, ADD_PEOPLE, ADD_REPO_PEOPLE_MAP} from './actions/git';
import {ADD_LOC_CANDIDATES, SELECT_CANDIDATE} from './actions/location';
import {ADD_CANDIDATE, REMOVE_CANDIDATE} from './actions/candidates';
import update from 'react-addons-update';


/*
  state shape:
  {
    // assumption: keep this result is because user tend to add a keyword and then search
    // assumption: not change according to realtime
    // as people build their reputations slowly, but result needs to comeout quick
    keywords: ['c++', 'python'],
    talents: {
      1: {
        name: Vera,
        profile_link: "http://this_is_veras_github_profile"
      },
      2: {
        name: Mic,
        profile_link: "http://this_is_mics_github_profile"
      }
    },
    repos: {
        1: {
          name: redux
          link: "http://this_is_a_redux_repo"
        },
        2: {
          name: react,
          link: "http://this_is_a_react_repo"
        }
    },
    keyrepomap: {
        c++: [1,2,3]
    },
    repotalentmap: {

    },
    locCandidates: [],
    candidates: [],
    activeInvitations: {
      start: date1,
      end: date2,
      jdId: the_jd_id
    }
  }
*/

// for none UI re-rendering states
// modify their reference instead of making a new copy
// which will not cause calling state.publish()
// only leave repo-talent map/changing keys to re-rendering
function activeInvitations(state = {}, action) {
  switch (action.type) {
  case SEND_INVITATION:
    let state = Object.assign({}, action);
    delete state.type;
    return state;
  default:
    return state;
  }
}

function candidates(state = [], action) {
  switch (action.type) {
  case ADD_CANDIDATE:
    if (state.includes(action.id)) {
      return state;
    }
    return update(state, {$push: [action.id]});
  case REMOVE_CANDIDATE:
    let index = state.indexOf(action.id);
    if (index !== -1) {
      return update(state, {$splice: [[index, 1]]});
    }
    return state;
  default:
    return state;
  }
}

function talents(state = {}, action) {
  switch (action.type) {
  case ADD_PEOPLE:
    let newState = Object.assign(state, {[action.id]: action.info});
    return newState;
  default:
    return state;
  }
}

function repotalentmap(state = {}, action) {
  switch (action.type) {
  case ADD_REPO_PEOPLE_MAP:
    let newState;
    if (Object.keys(state).includes(action.repo.toString())) {
      newState = update(state, {[action.repo]: {$push: [action.id]}});
    } else {
      newState = update(state, {[action.repo]: {$set: [action.id]}});
    }
    return newState;
  default:
    return state;
  }
}

function repos(state = {}, action) {
  switch (action.type) {
  case ADD_REPO:
    let newState = Object.assign(state, {[action.id]: action.json});
    return newState;
  default:
    return state;
  }
}

function keyrepomap(state = {}, action) {
  switch (action.type) {
  case ADD_REPO_KEY_MAP:
    let newState;
    if (Object.keys(state).includes(action.key)) {
      newState = {[action.key]: [...state[action.key], action.id]};
    } else {
      newState = {[action.key]: [action.id]};
    }
    return Object.assign(state, newState);
  default:
    return state;
  }
}


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


function locCandidates(state = {candidates: [], selected: ''}, action) {
  switch (action.type) {
  case ADD_LOC_CANDIDATES:
    update(state, {selected: {$set: ''}});
    return update(state, {candidates: {$set: action.candidates}});
  case SELECT_CANDIDATE:
    return update(state, {selected: {$set: action.index}});
  default:
    return state;
  }
}


const talentSearchApp = combineReducers({
  keywords,
  keyrepomap,
  repos,
  talents,
  repotalentmap,
  locCandidates,
  candidates
});

export default talentSearchApp;
