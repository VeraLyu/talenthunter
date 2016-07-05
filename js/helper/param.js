import * as urlconst from "../helper/urlconst" 

const defaultURLParam = {
    GITHUB_REPO: {
        'keyword':'',
        "q": {
            "in": "name,description",
            "size": ">50",
            "forks": ">10",
        },
        "sort": "stars",
        "order": "desc"
    }
}

export function formatURL(params={}, url) {
    var urls = urlconst; // NOTE: without refering to the module name,
                        //it will not appear in scope
    eval("URL=urls."+url);

    var params = Object.assign({}, defaultURLParam[url], params);

    var formattedQ = Object.keys(defaultURLParam[url]["q"]).map((key)=>{
        return `${key}:${defaultURLParam[url]["q"][key]}`;
    }).join("+");

    var formattedOtherParams = Object.keys(defaultURLParam[url]).filter((key)=>{
        return ["keyword", "q"].indexOf(key) == -1;
    });
    debugger;
    formattedOtherParams = formattedOtherParams.map((key)=>{
        return `${key}=${defaultURLParam[url][key]}`;
    }).join("&");

    URL = `${URL}?q=${params['keyword']}+${formattedQ}&${formattedOtherParams}`;
    return URL;
}