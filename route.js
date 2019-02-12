//通过http模块，创建本地服务器
var http=require('http');
var fs=require('fs');
//搭建服务器
var server=http.createServer(function (req,res) {
   if(req.url!=='/favicon.ico'){
       if(req.url==='./home'||req.url==='/'){
           res.writeHead(200,{'content-type':'text/html'});
           var myReadStream=fs.createReadStream(__dirname+'/index.html','utf-8');
           myReadStream.pipe(res)
       }else if(req.url==='/contact'){
           res.writeHead(200,{'content-type':'text/html'});
           var myReadStream=fs.createReadStream(__dirname+'/contact.html','utf-8');
           myReadStream.pipe(res)
       }else if(req.url==='/api/docs'){
           var data=[{name:"Henry",age:'30'},{name:"Buck",age:'28'}];
           res.writeHead(200,{"Content-type":'application/json'});
           res.end(JSON.stringify(data))
       }

   }
})
server.listen('33','127.0.0.1')
console.log('server is runnning...')