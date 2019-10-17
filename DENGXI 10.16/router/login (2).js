let query = require('../mysql/connectionPool.js')
let jwt = require('jsonwebtoken')
module.exports = {
    login: async function(req,res){
        let email = req.body.email;
        let password = req.body.password
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
       let sql = 'select * from vuser where v_email = ? and v_password = ?'
       let data = [email,password]
       let result = await query.query(sql,data)
       if(result.length){
           let token = jwt.sign({email:email},'dengxi',{
               expiresIn:60*60*1
           })
            res.json({
                success:200,
                message:'成功了',
                token:token,
                info:{
                    useremail:result[0].v_email,
                    username:result[0].v_username,
                    createTime:result[0].v_createTime,
                    status:result[0].v_status 
                } ,
                
            })
       }
       else{
           res.json({
               success:503,
               message:'用户名或密码错误'
           })
       }   
    }
}
}