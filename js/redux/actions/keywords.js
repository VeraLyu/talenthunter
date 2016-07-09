export const ADD_KEYWORD = 'ADD_KEYWORD';
export const REMOVE_KEYWORD = 'REMOVE_KEYWORD';


export function addKeyword(text) {
  return {type: ADD_KEYWORD, text};
}

export function removeKeyword(text) {
  return {type: REMOVE_KEYWORD, text};
}
