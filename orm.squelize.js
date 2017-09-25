var mysql = require('mysql');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'root', '123456', {host : '127.0.0.1', port : '3306', dialect : 'mysql'});
// definition
var Task = sequelize.define('Task', {
    // auto increment, primaryKey, unique
    id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},

    // comment
    title : {type : Sequelize.STRING, comment : 'Task title'},

    // allow null
    description : {type : Sequelize.TEXT, allowNull : true},

    // default value
    deadline : {type : Sequelize.DATE, defaultValue : Sequelize.NOW}
});
Task.sync().on('success', function(){
    console.log('aa..');
}).on('failure', function(){
    console.log('bb..');
});
sequelize.query('select * from user  where title = ? and description = ?', null, {logging : true, plain : true,  raw : true}, ['test_title_1', 'test_description_1']).success(function(res){
    console.log(res);
});