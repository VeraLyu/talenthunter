import {formatSearchURL, formatListUsrURL, formatUsrURL} from '../../helper/param';
import fetch from 'isomorphic-fetch';


export const ADD_REPO = 'ADD_REPO';
export const ADD_REPO_KEY_MAP = 'ADD_REPO_KEY_MAP';
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';
export const REQUEST_PEOPLE = 'REQUEST_PEOPLE';
export const ADD_PEOPLE = 'ADD_PEOPLE';
export const ADD_REPO_PEOPLE_MAP = 'ADD_REPO_PEOPLE_MAP';


export function requestGitPeople(keywords = []) {
  return {
    type: REQUEST_PEOPLE,
    keywords
  };
}

export function receiveGitPeople(json) {
  return {
    type: RECEIVE_PEOPLE,
    talents: json
  };
}

export function updatePeople(id, info) {
  return {
    type: ADD_PEOPLE,
    id,
    info
  };
}

export function updateRepoPeopleMap(repoId, talentId) {
  return {
    type: ADD_REPO_PEOPLE_MAP,
    repo: repoId,
    id: talentId
  };
}

export function updateKeyRepoMap(key, id) {
  return {
    type: ADD_REPO_KEY_MAP,
    key,
    id
  };
}

export function updateRepo(id, json) {
  return {
    type: ADD_REPO,
    json,
    id
  };
}

export function recieveGitRepo(json, key) {
  return function (dispatch) {
    dispatch(updateRepo(json.id, json));
    dispatch(updateKeyRepoMap(key, json.id));
  };
}

export function fetchRepoPeople(repo) {
  return function (dispatch) {
    let url = formatListUsrURL(repo);
/*
    fetch(url)
      .then(result=>result.json())
      .then((talentList)=>{
        talentList.forEach((item)=>{
          let userUrl = formatUsrURL(item.login);
          fetch(userUrl).then(result=>result.json()).then((userinfo)=>{
            userinfo.contribution = item.contributions;
            dispatch(updatePeople(userinfo.id, userinfo));
            dispatch(updateRepoPeopleMap(repo.id, userinfo.id));
          });
        });
      });
      */
    fetch(url)
      .then(result=>result.json())
      .then((talentList)=>{
        let tmpTalentList = talentList.slice(0, 2);
        tmpTalentList.forEach((item)=>{
          let userUrl = formatUsrURL(item.login);
          fetch(userUrl).then(result=>result.json()).then((userinfo)=>{
            userinfo.contribution = item.contributions;
            dispatch(updatePeople(userinfo.id, userinfo));
            dispatch(updateRepoPeopleMap(repo.id, userinfo.id));
          });
        });
      });
  };
}

export function fetchGitPeople(repos) {
  return function (dispatch) {
    repos.map((key)=>{
    // filter keyword to safe keyword and format to param template
      let param = formatSearchURL({keyword: key}, 'GITHUB_REPO');
      fetch(param)
        .then(result=>result.json())
        .then((json)=>{
          /*
          json.items.forEach((item)=>{
            dispatch(recieveGitRepo(item, key));
            dispatch(fetchRepoPeople(item));
          });
*/
          let tmpItem = json.items.slice(0, 2);
          tmpItem.forEach((item)=>{
            dispatch(recieveGitRepo(item, key));
            dispatch(fetchRepoPeople(item));
          });
        });
    });
  };
}

/*
export function fetchRepoPeople(repo) {
}
*/

export function fetchGit(keywords) {
  // fetch the repository first, and then the NO.1 people in the repository.
  return function (dispatch) {
    dispatch(requestGitPeople(keywords));
    // split keywords and eval it is a keyword or language
    // var languages = utils.filterLanguages(keywords);

    // fetches "GITHUB_REPO_FETCH_CNT" repositories
    // and "USER_PER_REPO" for each repository
    let repos = keywords;
    dispatch(fetchGitPeople(repos));
  };
}
