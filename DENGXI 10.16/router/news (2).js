let query = require('../mysql/connectionPool.js')

module.exports ={
    getnews: async function(req,res){
        let sql = 'select * from latest'
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
                success:'506',
                message:'最新资讯数据丢失'
            })
        }
    }
}