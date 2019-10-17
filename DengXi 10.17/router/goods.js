let query = require('../mysql/connectionPool.js')
module.exports = {
    goodsinfo: async function(req,res){
    	console.log(req.query.key)
        	let sql = 'select * from goods where g_part = ?'
        	console.log(req)
	        let data = [req.query.key]
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
	                success:'600',
	                message:'商品数据丢失'
	            })
	        }
    }
}