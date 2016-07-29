import {JD_API} from '../../helper/urlconst';

export const ADD_JD = 'ADD_JD';
export const CLEAR_JD = 'CLEAR_JD';

function updateJD(jdObject) {
  return {
    type: ADD_JD,
    jd: jdObject
  };
}

function clearJDs() {
  return {
    type: CLEAR_JD
  };
}

export function getJDs() {
  return function (dispatch) {
    dispatch(clearJDs());
    let request = new Request(JD_API, {
      method: 'GET',
      MODE: 'cors',
      redirect: 'follow'
    })
    fetch(request)
      .then(result=>result.json())
      .then((jdList)=>{
        jdList.forEach((item)=>{
          dispatch(updateJD(item.fields));
        });
      });
  };
}
