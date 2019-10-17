let query = require('../mysql/connectionPool.js')

module.exports ={
    getshopcar: async function(req,res){
        let sql = 'select * from shopcat'
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
                success:'508',
                message:'购物车数据丢失'
            })
        }
    }
}