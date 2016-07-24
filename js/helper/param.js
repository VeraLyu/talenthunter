import * as urlconst from '../helper/urlconst';
import Immutable from 'immutable';


const defaultURLParam = {
  GITHUB_REPO: {
    keyword: '',
    q: {
      in: 'name,description',
      size: '>50',
      forks: '>10'
    },
    sort: 'stars',
    order: 'desc'
  },
  GG_LOC_API: {
    key: urlconst.GG_API_KEY,
    input: ''
  }
};

function formatURLWithParam(url, params) {
  const formattedParams = Object.keys(params).map((key)=>{
    return `${key}=${params[key]}`;
  }).join('&');
  return `${url}?${formattedParams}`;
}

export function getGGLocationURL(input) {
  const URLParam = Object.assign({}, defaultURLParam.GG_LOC_API, {input: input});
  return formatURLWithParam(urlconst.GG_LOC_API, URLParam);
}

export function formatUsrURL(userID) {
  return `${urlconst.GITHUB_USER}${userID}`;
}

export function formatSearchURL(params = {}, url) {
  const urls = urlconst; // Refering to the module to make it appear in scope
  const URL = urls[url];

  let defaultParam = Immutable.fromJS(defaultURLParam[url]);
  let newParams = defaultParam.mergeDeep(params).toJS();

  const formattedQ = Object.keys(newParams.q).map((key)=>{
    return `${key}:${(newParams.q)[key]}`;
  }).join('+');

  const formattedOtherParams = Object.keys(newParams).filter((key)=>{
    return ['keyword', 'q'].indexOf(key) === -1;
  }).map((key)=>{
    return `${key}=${newParams[key]}`;
  }).join('&');

  return `${URL}?q=${newParams.keyword}+${formattedQ}&${formattedOtherParams}`;
}

export function formatListUsrURL(repo) {
  return `${repo.url}/contributors`;
}
