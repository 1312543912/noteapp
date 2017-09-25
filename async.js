var as = require('async');

as.series({
    one:function (callback) {
        callback(null,1);
    },
    two:function (callback) {
        callback(null,2);
    }
},function (err,results) {
     console.log(results);
})