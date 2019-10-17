let query = require('../mysql/connectionPool.js')

module.exports ={
    getnews: async function(req,res){
        let sql = 'select * from goods'
        let data = []
        let result = await query.query(sql,data)
        if(result.length){
            console.log(result)
            res.json({
                
            })
        }
        else{
            res.json({
                success:'506',
                message:'商品数据丢失'
            })
        }
    }
}