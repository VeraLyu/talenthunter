import * as urlconst from '../helper/urlconst';

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
  }
};

export function formatURL(params = {}, url) {
  const urls = urlconst; // Refering to the module to make it appear in scope
  const URL = urls[url];

  let newParams = Object.assign({}, defaultURLParam[url], params);

  const formattedQ = Object.keys(defaultURLParam[url].q).map((key)=>{
    return `${key}:${defaultURLParam[url].q[key]}`;
  }).join('+');

  const formattedOtherParams = Object.keys(defaultURLParam[url]).filter((key)=>{
    return ['keyword', 'q'].indexOf(key) === -1;
  }).map((key)=>{
    return `${key}=${defaultURLParam[url][key]}`;
  }).join('&');

  return `${URL}?q=${newParams.keyword}+${formattedQ}&${formattedOtherParams}`;
}
