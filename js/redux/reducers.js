import {combineReducers} from 'redux';
import {ADD_KEYWORD, REMOVE_KEYWORD} from './actions/keywords';
import {ADD_REPO, ADD_REPO_KEY_MAP, ADD_PEOPLE, ADD_REPO_PEOPLE_MAP} from './actions/git';


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
    let tmp = {};
    tmp[action.id] = action.info;
    return Object.assign({}, state, tmp);
  default:
    return state;
  }
}

function repotalentmap(state = {}, action) {
  switch (action.type) {
  case ADD_REPO_PEOPLE_MAP:
    let tmp = {};
    if (Object.keys(state).includes(action.repo.toString())) {
      tmp[action.repo] = [...state[action.repo], action.id];
    } else {
      tmp[action.repo] = [action.id];
    }
    return Object.assign({}, state, tmp);
  default:
    return state;
  }
}

function repos(state = {}, action) {
  switch (action.type) {
  case ADD_REPO:
    let tmp = {};
    tmp[action.id] = action.json;
    return Object.assign({}, state, tmp);
  default:
    return state;
  }
}

function keyrepomap(state = {}, action) {
  switch (action.type) {
  case ADD_REPO_KEY_MAP:
    let tmp = {};
    if (Object.keys(state).includes(action.key)) {
      tmp[action.key] = [...state[action.key], action.id];
    } else {
      tmp[action.key] = [action.id];
    }
    return Object.assign({}, state, tmp);
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
