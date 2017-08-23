//ajax
'use strict';
let getJSON = function (url) {
    let promise = new Promise(function (resolve, reject) {
        let client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader("Accept", "application/json");
        client.send();


        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });

    return promise;
};

getJSON("/posts.json").then(function (json) {
    console.log('Contents:' + JSON.stringify(json));
},function(error){
    console.error('出错了', error);
});
