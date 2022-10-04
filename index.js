// Created by Namish Kumar in October 2022
// Uses Axios
const axios = require("axios");
// Exports the function
exports.getData = function getData(config, document, collection) {
    // The URL for request
    const URL = config.URL;
    
    if(URL === undefined || URL === null || URL === NaN) {
        return console.error("NamishDB Client: Unable to connect to database of null URL! Error: <NamishDB.Client.Error.InvalidURI>");
    }
    // The password for your server
    const password = config.password;
    // Returns error
    if(document === null || document === undefined || document === NaN || collection === null || collection === undefined || collection === NaN) {
        return {error:"Invalid Database Reference"};
    }

    // Creates a database reference
    let mainRes;
    axios({
        method: 'post',
        url: URL + "/fetch",
        data: {
            password:password,
            document:document,
            collection:collection,
        }
    }).then(res => {
        mainRes = res.data;    
    });
    return mainRes;
}
