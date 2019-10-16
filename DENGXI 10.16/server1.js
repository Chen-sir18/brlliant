let express = require('express')
let app = express()
// 引入解析post模块
let bodyParser = require('body-parser')
let login = require('./router/login.js')
let register = require('./router/register.js')
let goods =require('./router/goods.js')
let news = require('./router/news.js')
let lendcodeParser = bodyParser.urlencoded({extended:false})

app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    next()
})

app.use(express.static(__dirname + '/static'))
app.post('/register',lendcodeParser,register.register)
app.post('/login',lendcodeParser,login.login)
app.get('/goods',goods.goodsinfo)
app.get('/news',news.getnews)
app.listen(3001)