var mysql  = require('mysql');  //调用MySQL模块
//创建一个connection
var connection = mysql.createConnection({
    host: 'localhost',       //主机
    user: 'root',               //MySQL认证用户名
    password: '123456',        //MySQL认证用户密码
    database: 'test',
    port: '3306'                   //端口号
});
connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});
var userAddSql = 'insert into user (uname,pwd) values(?,?)';
var param = ['ccc','ccc'];
//使用query对数据库进行操作  参数1.传入sql语句   参数2.sql语句的参数  参数3.回掉函数
connection.query(userAddSql,param,function(err,rs){
    if(err){
        console.log(err);
        console.log('insert err:',err.message);
        return;
    }
    console.log(rs);
    console.log('insert success');
});
//connection.query 查询
connection.query('SELECT * from user where uid=? or uid=?',[1,2], function(err, rs) {
    if (err) {
        console.log('[query] - :'+err);
        return;
    }
    for(var i=0;i<rs.length;i++){
        console.log('The solution is: ', rs[i].uname);
    }
});
//关闭connection
connection.end(function(err){
    if(err){
        console.log(err.toString());
        return;
    }
    console.log('[connection end] succeed!');
});