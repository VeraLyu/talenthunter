import {combineReducers} from 'redux';
import {ADD_KEYWORD, REMOVE_KEYWORD} from './actions/keywords';
import {ADD_REPO, ADD_REPO_KEY_MAP, ADD_PEOPLE, ADD_REPO_PEOPLE_MAP} from './actions/git';
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

    }
  }
*/

function talents(state = {}, action) {
  switch (action.type) {
  case ADD_PEOPLE:
    let newState = update(state, {[action.id]: {$set: action.info}});
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
    }
    else {
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
    let newState = update(state, {[action.id]: {$set: action.json}});
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
      newState = update(state, {[action.key]: {$push: [action.id]}});
    } else {
      newState = update(state, {[action.key]: {$set: [action.id]}});
    }
    return newState;
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

const talentSearchApp = combineReducers({
  keywords,
  keyrepomap,
  repos,
  talents,
  repotalentmap
});

export default talentSearchApp;
