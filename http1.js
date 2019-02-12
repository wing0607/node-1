//通过http模块，创建本地服务器
var http=require('http');
var fs=require('fs');
//搭建服务器
var server=http.createServer(function (req,res) {
    console.log(req)
    res.writeHead(200,{'content-type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname+'/index.html','utf-8');
    myReadStream.pipe(res)
})
server.listen('33','127.0.0.1')
console.log('server is runnning...')