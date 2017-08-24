const async = require('async');
var createUser = function(id, callback) {
    callback(null, {
        id: 'user' + id
    });
};

// generate 5 users
async.times(5, function(n, next) {
    createUser(n, function(err, user) {
        console.log(user);
        next(err, user);
    });
}, function(err, users) {
    // we should now have 5 users
    // console.log(users);
});