export const ADD_CANDIDATE = 'ADD_CANDIDATE';
export const REMOVE_CANDIDATE = 'REMOVE_CANDIDATE';

export function addCandidate(id) {
  return {
    id,
    type: ADD_CANDIDATE
  };
}

export function removeCandidate(id) {
  return {
    id,
    type: REMOVE_CANDIDATE
  };
}
