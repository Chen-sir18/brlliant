let query = require('../mysql/connectionPool.js')
module.exports = {
    deletegoods: async function(req,res){
        	let sql = 'delete from goods where g_id = ?'
        	console.log(req.query.id)
        	let id = req.query.id
	        let data = [id]
	        let result = await query.query(sql,data)
	            console.log(result)
	        if(result){

	            res.json({
	                success:'ok',
	                message:'成功',
	                data:result
	            })
	        }
	        else{
	            res.json({
	                success:'601',
	                message:'删除商品失败'
	            })
	        }
    }
}