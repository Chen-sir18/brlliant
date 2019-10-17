let query = require('../mysql/connectionPool.js')
module.exports = {
    register: async function(req,res){
        let email = req.body.email;
        let password = req.body.password
        console.log(req.body.username)
        let username = req.body.username || req.body.email
        console.log(username)
    // 验证邮箱的格式是否正确，验证密码是否存在
    let emailhtml = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    let isemail = emailhtml.test(email)
    let passwordhtml = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/
    let ispassword = passwordhtml.test(password)

    if(!isemail){
        res.json({
            success:501,
            message:'邮箱验证错误'
        })
    }
    else if(!ispassword){
        res.json({
            success:502,
            message:'密码格式不正确'
        })
    }
   else if(isemail && ispassword){
        // 检查用户名是否已经存在
        let sql = 'select * from vuser where v_email = ? and v_password = ?'
        let data = [email,password]
        let result = await query.query(sql,data)
        if(result.length){
            res.json({
                success:504,
                message:'用户名已存在'
            })
        }
        else{
            sql = 'insert into vuser(v_email,v_password,v_username,v_status) values(?)'
            data = [email,password,username,1]
            result = await query.query(sql,[data])
            if(result){
                res.json({
                    success:200,
                    message:'成功了'
                })
            }
            else{
                res.json({
                    success:505,
                    message:'注册失败'
                })
            }
        }
       
    }
}
}