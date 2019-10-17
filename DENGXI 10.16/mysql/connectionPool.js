let mysql = require('mysql')
// 创建数据库的配置文件
let mysqlObj = {
    host:'localhost',
    port:3306,
    user:'root',
    password: 'root',
    database: 'vereesa'
}

//数据库连接池
let pool = mysql.createPool(mysqlObj)

let query  = function(sql,data){
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(!err){
                //sql 查询的语句
                //data 查询过程中需要的数据
                //error 查询错误信息
                // result 查询的结果
                connection.query(sql,data,function(error,result){
                    if(!error){
                        // 将查询成功返回的数据存入resolve中
                        resolve(result)
                    }else{
                        reject(error)
                    }
                    //数据库释放
                    connection.release()
                })
            }else{
                reject(err)
            }
        })
    })
}
module.exports = {
    query:query
}