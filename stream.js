var fs=require('fs');
var http=require('http');
/*var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf8');//读取文件流
//console.log(myReadStream);
var myWriteStream=fs.createWriteStream(__dirname+'/writeMe2.txt','utf-8')//写入文件流
myReadStream.pipe(myWriteStream)
/!*
myReadStream.on('data',function (chunk) {
    console.log('=====正在接收一部分数据=====');
    myWriteStream.write(chunk)
})*!/*/
/*搭建服务器*/
var server=http.createServer(function (req,res) {
    res.writeHead(200,{'Content-type':'text/plain'});
    var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf8');
    myReadStream.pipe(res)
})
server.listen(3000,'127.0.0.1');
console.log('server is runnning...');
