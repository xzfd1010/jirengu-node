// 异步加载图
'use strict';
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        let image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}

loadImageAsync('https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2755300164,3555632141&fm=173&s=7140F4A60E1234D6C0F5CC2F03007043&w=554&h=311&img.JPG').then(function (image) {
    console.log('resolved');
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(image);
}, function (e) {
    console.log('rejected');
    console.log(e);
});