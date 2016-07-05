import {formatURL} from "../helper/param"


export const ADD_KEYWORD = "ADD_KEYWORD"
export const REMOVE_KEYWORD = "REMOVE_KEYWORD"
export const REQUEST_PEOPLE = "REQUEST_PEOPLE"
export const RECEIVE_PEOPLE = "RECEIVE_PEOPLE"


export function addKeyword(text) {
    return {type: ADD_KEYWORD, text}
}

export function removeKeyword(text) {
    return {type: REMOVE_KEYWORD, text}
}

export function requestGitPeople(keywords=[]) {
    return {
        type: REQUEST_PEOPLE,
        keywords
    }
}

export function receiveGitPeople(json) {
    return {
        type: RECEIVE_PEOPLE,
        talents: json
    }
}

export function fetchGitPeople(keywords) {
    // fetch the repository first, and then the NO.1 people in the repository.
    return function (dispatch) {
        //dispatch(requestPeople(keywords));
        //split keywords and eval it is a keyword or language
        //var languages = utils.filterLanguages(keywords);

        // fetches "GITHUB_REPO_FETCH_CNT" repositories
        // and "USER_PER_REPO" for each repository
        var repos = keywords;

        keywords.map((key)=>{
            // filter keyword to safe keyword and format to param template
            var param = formatURL({'keyword':key}, "GITHUB_REPO");
            fetch(param).then((result)=>{
                console.log(result);
            });
        });
    }
}