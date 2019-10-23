
var path = require('path')
var formidable = require('formidable')
var query = require('../mysql/connectionPool.js') 
module.exports={
    addgoods: async function(req,res){
       // 获取传入的form表单并且解析地址
        let form = formidable.IncomingForm();
    // files 是上传的文件
    // field 是除了文件的所有数据
         form.parse(req, async function(err,field,files){
         	console.log(field)
            // 将获取的参数写入数据库中去
            // ?表示需要的参数
               let goodsimg = path.parse(files.goodsimg.path).base
               var sql = 'insert into goods (g_title,g_price,g_details,g_img,g_part) values(?)'
               var data = [field.goodsname,field.goodsprice,field.goodsdescribe,goodsimg,'Arrivals']  
               let result = await query.query(sql,[data])
               if(result){
                   console.log('成功了')               
                   res.json({
                       success:'ok',
                       message:'存入商品成功'
                   })
               }
               else{
                   res.json({
                       success:701,
                       message:'存入商品失败'
                   })
               }
            })
             // 将上传的图片保存到固定的地址中去
        form.uploadDir = './static/img'
        // 保留图片的后缀名，否则可能会接受失败
        form.keepExtensions = true  
        }
       
    }