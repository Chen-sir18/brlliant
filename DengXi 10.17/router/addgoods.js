
var path = require('path')
var formidable = require('formidable')
var query = require('../mysql/connectionPool.js') 
module.exports={
    addgoods: async function(req,res){
       // 获取传入的form表单并且解析地址
        let form = formidable.IncomingForm();
    // files 是上传的文件
    // field 是除了文件的所有数据
         form.parse(req,function(err,field,files){
            // 将获取的参数写入数据库中去
            // ?表示需要的参数
            // let goodsimg = path.parse(files.goodsimg.path).base
            // var sql = 'insert into goods (goodscode,goodsname,goodsclass,goodsprice,goodsstore,goodsdescribe,goodsimg) values(?)'
            // var data = [field.goodscode,field.goodsname,field.goodsclass,field.goodsprice,field.goodsstore,field.goodsdescribe,goodsimg]  

            // let result = await query.query(sql,[data])
            // if(result){
            //     console.log('成功了')               
            //     res.json({
            //         success:true,
            //         data:''
            //     })
            // }
            // else{
            //     res.json({
            //         success:false,
            //         data:''
            //     })
            // }
              
                
            })
             // 将上传的图片保存到固定的地址中去
        form.uploadDir = '../img'
        // 保留图片的后缀名，否则可能会接受失败
        form.keepExtensions = true  
        }
       
    }