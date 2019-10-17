let query = require('../mysql/connectionPool.js')

module.exports ={
    getblogs: async function(req,res){
        let sql = 'select * from blogs'
        let data = []
        let result = await query.query(sql,data)
        if(result.length){
            // console.log(result)
            res.json({
                success:200,
                message:'成功',
                data:result
            })
        }
        else{
            res.json({
                success:'507',
                message:'blogs数据丢失'
            })
        }
    }
}