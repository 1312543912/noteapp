const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});
//测试数据库链接
sequelize.authenticate().then(function() {
    console.log("数据库连接成功");
}).catch(function(err) {
    //数据库连接失败时打印输出
    console.error(err);
    throw err;
});
//第一个模型
const User = sequelize.define('testuser', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});
User.sync({force:true}).then(function () {
     return User.create({
        firstName:'John',
        lastName:'hancock'
     });
});
console.log('ee');
//sql语句
setTimeout(function (args) {
    User.findAll().then(function (res) {
        console.log(res);
    });
},1000);